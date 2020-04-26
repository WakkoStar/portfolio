import { projects } from '../../data'

export default (req, res) => {
    return res.status(200).json(projects)
}