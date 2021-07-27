// If we type a URL (127.0.0.1:4000/friends) and press enter, a network request will fire
// 127.0.0.1 is the machine, 4000 the port asking for the friends the resource
// Can observe in chrome tools network tab, with a preview of the request body.
// Each time we press back or forward an http request is made ontop of a tcp/ip connection

// Front end routing means using JavaScript to manipulate the URL and change it, without causing actual network requests
// We can conditionally render UI depending on the URL
// So we're not requesting the resouce from the machine (it probably wont exist on the machine), the change to the URL is just cosmetic
// Also adds a new element to the history stack, even though no requests are happening

// You can add event listeners to the link that prevent default behaviour
// then use the history API of HTML5 with the pushState method
// So it won't network request because you prevented default
// and it will change the URL, and add it to the history stack with pushState
// see client-side-routing.png


// What is Routing?
// Being able to access information based on a URL is not only a powerful tool at our disposal as end-users and developers, but it is also a standard. 
// Routing is essential for handling a communication piece between computers. Routing is the way we navigate through websites and web applications today. 
// When we click on a link on any web app or website, we are routing to a URL and requesting some information that lives somewhere else. 
// You do this every day - just type www.google.com in a web browser, and you've utilized routing to get resources from a server.

// What is a Server?
// In computer science, the term "server" refers to centralized resources on a network. 
// These servers are physical devices, usually housed with other servers in large warehouses, that run the "behind the scenes" work of the internet like data storage. 
// When you route, you're routing to a server.


// Server-Side Routing
// When we request information from a server (by clicking on a link or button), that server then sends back the document that was requested. 
// For example, we click on a link and our URL changes to match the request, 
// then the server goes and finds a template or some HTML file and sends it back across the world wide web to deliver that content to the user.

// All of this is handled and achieved on the server, and there are a few things that happen here. 
// First, the server will refresh the web page that we're looking at. 
// This is because a new request was made for information, and the information given was a bunch of DOM elements, so we have to re-paint the web page. 
// The information requested will be the only information given, no more, and no less. 
// Because of this, we get the opportunity to load smaller portions of the webpage 
// as opposed to requesting/loading the entire thing the whole time the way that we do in Client-Side Routing.

// When you (the client) request a lot of information, your computer and subsequent internet-related devices run through a lot of protocols. 
// The process can be really slow, especially when bandwidth is an issue.

// Client-Side Routing
// Now that we know about how things used to be done, we can talk about modern routing. 
// Javascript and the other tools that we get to work with within Javascript are super sophisticated. 
// Because of the arrival of tools like Google Chrome's V8 Engine, we can do a lot of things that weren't previously possible. 
// One of those new patterns is using JavaScript to maintain state (or memory) within our applications 
// and use that memory to tell the Browser what to display when a resource is requested.

// When Routing is handled internally by the JavaScript that is already on the page, we achieve what is known as Client-side routing. 
// And this tool is how we get things done today, especially in React! And the best part about this is that the page won't refresh! 
// The data is just there, displayed when we ask for it. 
// How this works is that when a user clicks on a requested resource, instead of the client asking for that resource from the server via a URL, JavaScript will prevent this. 
// We then get the resource (state) that is already available to us rendered out, and when using react, this happens beautifully through component-based architecture.


// https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f
// Read ^ very short.

