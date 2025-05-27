export default function findCenter(bounding, axis){
    if (axis === "x"){
        return bounding.left + (bounding.width / 2)
    } else if (axis === "y"){
        return bounding.top + (bounding.height / 2)
    }
}