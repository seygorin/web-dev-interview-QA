'use client'

import React, {useState, useRef, useEffect} from 'react'
import dynamic from 'next/dynamic'
import {useTheme} from '@/contexts/ThemeContext'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {ssr: false})

type Language = 'javascript' | 'typescript' | 'jsx' | 'html' | 'css'

const DEFAULT_CODE: Record<Language, string> = {
  javascript:
    '// Write your JavaScript code here\nconsole.log("Hello, World!");',
  typescript:
    '// Write your TypeScript code here\nlet message: string = "Hello, World!";\nconsole.log(message);',
  jsx: `// Write your React JSX code here
const App = () => {
  return <h1>Hello, World!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
console.log('App rendered to #root');`,
  html: '<!-- Write your HTML code here -->\n<h1>Hello, World!</h1>',
  css: '/* Write your CSS code here */\nbody {\n  color: blue;\n}',
}

const CodeEditor: React.FC = () => {
  const {theme} = useTheme()
  const [language, setLanguage] = useState<Language>('javascript')
  const [code, setCode] = useState(DEFAULT_CODE[language])
  const [output, setOutput] = useState('')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [babel, setBabel] = useState<any>(null)

  useEffect(() => {
    import('@babel/standalone').then((babelModule) => {
      setBabel(babelModule)
    })
  }, [])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language
    setLanguage(newLanguage)
    setCode(DEFAULT_CODE[newLanguage])
  }

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setCode(value)
    }
  }

  const executeCode = async () => {
    if (iframeRef.current && babel) {
      const iframe = iframeRef.current
      let runCode = code

      if (language === 'typescript' || language === 'jsx') {
        try {
          const result = babel.transform(code, {
            presets: ['typescript', 'react'],
            filename: language === 'typescript' ? 'file.ts' : 'file.jsx',
          })
          runCode = result.code || ''
        } catch (error) {
          console.error('Error transpiling code:', error)
          setOutput('Error transpiling code. Please check your syntax.')
          return
        }
      }

      switch (language) {
        case 'html':
          runCode = `document.body.innerHTML = \`${code}\`; console.log('HTML rendered');`
          break
        case 'css':
          runCode = `
            const style = document.createElement('style');
            style.textContent = \`${code}\`;
            document.head.appendChild(style);
            console.log('CSS applied');
          `
          break
      }

      iframe.srcdoc = `
        <html>
          <head>
            <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
            <script>
              function runCode() {
                try {
                  ${runCode}
                } catch (error) {
                  console.error(error);
                }
              }
              console.log = function(...args) {
                window.parent.postMessage(JSON.stringify(args.map(arg => {
                  if (typeof arg === 'object' && arg !== null) {
                    return JSON.stringify(arg, null, 2);
                  }
                  return String(arg);
                })), '*');
              };
              console.error = function(...args) {
                window.parent.postMessage(JSON.stringify(['Error:', ...args.map(String)]), '*');
              };
              window.onerror = function(message, source, lineno, colno, error) {
                console.error('Runtime error:', message);
              };
            </script>
          </head>
          <body>
            <div id="root"></div>
            <script>runCode();</script>
          </body>
        </html>
      `
    } else {
      setOutput('Babel is not loaded yet. Please try again in a moment.')
    }
  }

  const clearOutput = () => {
    setOutput('')
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data)
        setOutput((prev) => prev + data.join(' ') + '\n')
      } catch (error) {
        console.error('Error parsing message:', error)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div
      className={`rounded overflow-hidden border ${
        theme === 'dark' ? 'border-slate-700' : 'border-slate-300'
      }`}
    >
      <div
        className={`p-4 flex justify-between items-center ${
          theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
        }`}
      >
        <select
          value={language}
          onChange={handleLanguageChange}
          className={`rounded px-2 py-1 text-sm ${
            theme === 'dark'
              ? 'bg-slate-700 text-white'
              : 'bg-white text-slate-800'
          }`}
        >
          <option value='javascript'>JavaScript</option>
          <option value='typescript'>TypeScript</option>
          <option value='jsx'>React (JSX)</option>
          <option value='html'>HTML</option>
          <option value='css'>CSS</option>
        </select>
      </div>
      <div className='h-96 w-full'>
        <MonacoEditor
          height='100%'
          language={language === 'jsx' ? 'javascript' : language}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          value={code}
          onChange={handleEditorChange}
          options={{
            fontSize: 14,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
      <div
        className={`p-4 flex justify-between items-center ${
          theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
        }`}
      >
        <div className='flex space-x-2'>
          <button
            onClick={executeCode}
            className={`font-medium py-2 px-4 rounded text-sm ${
              theme === 'dark'
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-slate-300 hover:bg-slate-400 text-sky-700'
            }`}
          >
            Run Code
          </button>
          <button
            onClick={clearOutput}
            className={`font-medium py-2 px-4 rounded text-sm ${
              theme === 'dark'
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-slate-300 hover:bg-slate-400 text-sky-600'
            }`}
          >
            Clear Output
          </button>
        </div>
      </div>
      <div
        className={`p-4 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}
      >
        <h3
          className={`text-sm font-semibold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}
        >
          Output:
        </h3>
        <pre
          className={`font-mono text-sm p-4 rounded overflow-auto max-h-40 ${
            theme === 'dark'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-800'
          }`}
        >
          {output || 'Run your code to see results.'}
        </pre>
      </div>
      <iframe
        ref={iframeRef}
        style={{display: 'none'}}
        sandbox='allow-scripts'
      ></iframe>
    </div>
  )
}

export default CodeEditor
