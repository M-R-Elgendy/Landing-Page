<h1>FWD - Landing Page (First Project)</h1>

1: Define global variables<br>
     &emsp;- pageHeader    => Store header element     (Used to show/hide header)<br>
     &emsp;- sections      => Store all sections       (Used to create nav links)<br>
     &emsp;- navList       => Store navList element    (Used to create nav links)<br>
     &emsp;- toTopBtn      => Store button             (Used to show/hide button)<br>
     &emsp;- timer         => timer                    (Used with settimeout to show/hide header)<br>
<br>

2: Create helper functions (Scroll to top and set button visibility)<br>
    &emsp;- Scroll to the top of the page<br>
    &emsp;- Set scroll to top button to be 'visibile' if user scrolled over 200px<br>
<br>

3: Create function that loop through sections elements and create a link tag for each section.<br>
    &emsp;- Bulid a (DocumentFragment) to store all changes,<br>
    &emsp;- Loop over all sections and get every section attribute (id, data-nav)<br>
    &emsp;- Create 'li' and 'a' elements then add new element to 'Fragment'<br>
    &emsp;- Append (DocumentFragment) to the nave list element<br>
<br>

4: Create function to assign active classes to nav list and sections<br>
    &emsp;- Loop over nav list and section to detect current elements and assign active classes<br>
<br>

5: Create function to scroll to section when nav link clicked<br>
    &emsp;- Get 'data-target' attribute from clicked link<br>
    &emsp;- Scroll smoothly to the target section<br>
    &emsp;- Prevent default action from link<br>
<br>

6: Create event listener to scrolling to set:<br>
    &emsp;- Scroll to top button visibility<br>
    &emsp;- Identify current section and call function (addActiveClass) to assign classes to active element<br>
    &emsp;- Use (setTimeout) to detect if user stop scrolling<br>
    &emsp;- after 2500ms set header opacity to 0<br>