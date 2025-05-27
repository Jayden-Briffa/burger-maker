export default function findMiddle(num1, num2){
    const maxNum = Math.max(num1, num2);
    const minNum = Math.min(num1, num2);

    return minNum + ((maxNum - minNum) / 2)
}