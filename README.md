What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> getElementById accesses a single element because id is a unique term and for the getElementsByClassName it access all the elements which have the same class name.In querySelector we can access elements by their id,class, or even tag, but the fact is it will show only the first one while querySelectorsAll give all element which have the same class name or same tag.

How do you create and insert a new element into the DOM?
=> to create we use createElemment and to insert  it to dom we use apendChild

What is Event Bubbling and how does it work?
=> bulling means if you have 3 divs and if you click the child it means you click the parent and the grandeparent div. and if you click parent , you also click grandparent div.

What is Event Delegation in JavaScript? Why is it useful?
=> Instead of adding event listeners to every child, you add one listener to the parent and let bubbling do the work.

What is the difference between preventDefault() and stopPropagation() methods?
=> for the preventDefault() we use it to stop refreashing the page and for stopPropagation() we use to stop bubboling mean if you clikc child the parent won't know that , that you have clicked the child
