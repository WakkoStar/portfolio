export function getAllProjectsLinks(projects) {
    return projects.map(({link}) => {
        return {
            params: {
                projet: link
            }
        }
    })
}   