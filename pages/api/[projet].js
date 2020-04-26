import { projects } from '../../data'

export default ({ query: { projet } }, res) => {
  const filtered = projects.filter(p => p.link === projet)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project with link: ${projet} not found.` })
  }
}