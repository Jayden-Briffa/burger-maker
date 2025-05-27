import generateLayerSrc from '../../../assets/guide/generate-layers.png';
import dragLayersSrc from '../../../assets/guide/drag-layers.png';
import burgerFrameSrc from '../../../assets/guide/burger-frame.png';
import belowBehindSrc from '../../../assets/guide/below-behind.png';
import deleteLayersSrc from '../../../assets/guide/delete-layers.png';
import downloadBurgerSrc from '../../../assets/guide/download-burger.png';

const steps = [
    {
        imgSrc: generateLayerSrc,
        imgTitle: "Generate layers",
        description: "Click a fooditem to summon it on the delivery vehicle icon"
    },
    {
        imgSrc: dragLayersSrc,
        imgTitle: "Drag layers",
        description: "Use your mouse to click and drag items to your burger"
    },
    {
        imgSrc: burgerFrameSrc,
        imgTitle: "The burger frame",
        description: "You'll see an outline. This is where your burger should be constructed. Use the slider to make it darker or lighter"
    },
    {
        imgSrc: belowBehindSrc,
        imgTitle: "Items below go behind",
        description: "Place an item below another, and it will automatically be shown on top (usually)"
    },
    {
        imgSrc: deleteLayersSrc,
        imgTitle: "Delete layers with backspace",
        description: "Don't want that extra piece of cheese? Select it and click backspace to remove it"
    },
    {
        imgSrc: downloadBurgerSrc,
        imgTitle: "Download your burger",
        description: "Once you've made your masterpiece, click download to keep it forever!"
    }

]

export default steps;