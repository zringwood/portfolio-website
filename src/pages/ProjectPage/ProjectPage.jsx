import "./ProjectPage.scss"

function ProjectPage({projectURL}){
    return (
        <iframe className="project-frame" title="Project" src={projectURL}></iframe>
    )
}
export default ProjectPage