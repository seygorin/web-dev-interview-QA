export function searchInterviews(interviews: any[], query: string) {
  const results = interviews.flatMap((interview) => {
    const lines = interview.content.split('\n')
    let currentHeader = ''
    const matches = lines.reduce((acc: any[], line: any, index: any) => {
      if (line.startsWith('#')) {
        currentHeader = line.replace(/^#+\s*/, '').trim()
      }
      if (line.toLowerCase().includes(query.toLowerCase())) {
        acc.push({
          ...interview,
          position: index,
          snippet: line.trim(),
          header: currentHeader,
        })
      }
      return acc
    }, [])
    return matches
  })
  return results
}
