import useOnScreen from "../../hooks/UseOnScreen"
function AnimationSection({className, children, animations}){
    const [ref, isIntersecting] = useOnScreen()
    if(!(typeof children === Array)){
        children = [children]
    }
   
    return (
       <div className={`${className} ${isIntersecting && animations}`} ref={ref}>
        {children.map((e) => {
            return e;
        })}
        </div>
    )
}
export default AnimationSection