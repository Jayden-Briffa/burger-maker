# Prevent infinite render loop of draggable images
Origionally, the useEffect in DraggableImage.jsx would check if the layer exists and only remove the layer if so before adding the new layer. However, that step was unnecessary and caused the layerExists function to be redefined despite it's useCallback, which caused the DraggableImage to redefine itself and call the useEffect in an infinite loop.

React.memo and useMemo were used to also prevent a single update in a DraggableImage from rerendering all the other children of the Burger component


# Make DraggableImages always at the highest z-index when selected- FIX PERFORMANCE
Initially, the class .z-50 would be added when the image was selected, and removed when it was deselected. However, after the automatic z-index sorting by Y position was implemented, this stopped working (images stayed at their z-index position even while selected). By logging the result each time a z-index was changed, I found that the z-indexes were being reset each time an image rerendered, including whenever it moved, so it wouldn't stay at a hgih z-index for long.

Implemented sortLayers rather than useEffect- memoised
To prevent unnecessary layer sorting, I transferred the useEffect's callback to make it only run when an item was deselected, reducing the number of unnecessary sorts performed. However, this led to all child elements of Burger being rerendered whenever one was interacted with and my first instinct, to use useCallback, did not fix it

# Create buttons to generate draggable images
Initially, I looked at the React docs and online for how you could dynamically generate content. Eventually, I remembered that .map() is used for this sort of thing. I then realised, that my addLayer function would have to be changed to work outside of the DraggableImage component.

This led me to creating BurgerLayersContext to allow access to the functions and values which manage layers all across the app. Within this, a new state value, layersBounding, was created to help access layers' bounding by their ID and keep the layers state as constant as possible (ie, not changing it with each new layer), to make the future map() function easier to work with

# Fix id assignment mechnism breaking after a few elements are added
After I implemented the layer generation buttons, an issue arose where, after a few had been added, the program would give new layers non-unique id's. After logging the new Id being added in each addLayer call and logging the layers array it was based on, I found that, for some reason the order of elements in layers changed, causing the new ID to be generated incorrectly.

The only thing I found could be changing the order of elements was the sortLayers function. However, after a while of logging and experimenting I couldn't find the issue so I decided I needed some help and asked ChatGPT for what could be changing the order of elements in layers. It pointed out that my use of layers.sort mutates the origional state array rather than just returning it like I thought it did. I changed the call to use a shallow copy of layers rather than the origional variable. 

# Fix all instances of a certain layer type being deleted when calling removeLayer

# Export burger as an image file
At this point, the web app was mostly functional. You could add, remove, and move layers and they'd behave at least largely how you'd expect. I started looking for ways to create images with JS and found out about Vercel's OG image platform and it sounded like it would fit my needs since it allows the creation of images with HTML and CSS. Since I had no prior knowledge of the tool, I decided to first take a look at the docs and create an initial starting project. It soon became apparent that using Next.js was necessary to use this tool.

I thought it'd be useful to know a bit about Next.js anyways so I started a short codecademy course about the basics so I wouldn't be lost during a tutorial. After reaching the end of that course with a grasp on concepts like Next.js's file-system based routing and reserved filenames, I made another quick search and found a tutorial for creating images from HTML with html2canvas. As this would be much simpler to implement, I opted to use this instead. 

After following the tutorial given by the article: https://www.robinwieruch.de/react-component-to-image/, I added a burgerRef value to my BurgerLayersContext so it could be access across the app without prop drilling. Upon testing the download button, I found that it wasn't working as it did before and guessed that it was because I was using JSX (which I tested by swapping out the burger jsx for static html and was seemingly proven correct). I then tried to use static-jsx to turn my jsx into raw HTML instead of processing it directly, but that didn't work. After an hour of testing (during which I asked AI and was given no helpful answers), I realised that it may be the image itself. 

I tried taking classes away until it worked properly, and found that the position: fixed property was causing it for some reason. After searching for how html2canvas interacts with fixed positioning, I found that people had issues previously but nothing that actually helped me to fix it. Looking at the file size be 0b I eventually thought of the fixed positioning causing the #burger element to be of 0 height, meaning there was nothing to render. I gave the burger element a fixed width and height, and that fixed the issue.

# Extras
- Split context into providers and hooks to facilitate fast reloading