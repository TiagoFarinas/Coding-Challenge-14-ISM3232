// Task 2 - Fetch Tickets Using Async/Await and Handle Errors
const ticketsContainer = document.getElementById('tickets-container');
const errorMessage = document.getElementById('error-message');
const loadingMessage = document.getElementById('loading-message');
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
async function fetchTickets() {
  try {
    loadingMessage.style.display = 'block';// Display loading message
    errorMessage.textContent = '';// Clear error messages
    const response = await fetch(apiEndpoint);// Fetch data from API
    // Check response. otherwise, throw error
    if (!response.ok) {
      throw new Error("Failed to fetch tickets. Please try again later.")};
    // Parse JSON response
    const tickets = await response.json();
    // If tickets not found, throw custom error
    if (tickets.length === 0) {
      throw new Error("No unresolved tickets available.")};
    //Function to display tickets
    displayTickets(tickets);
  } catch (error) {
    // Handle errors and display message in container
    errorMessage.textContent = error.message
  } finally {// Task 4 - Ensure Cleanup After Fetch Attempt
        loadingMessage.style.display = 'none'}};

// Task 3 - Display Tickets Dynamically on the Page
function displayTickets(tickets) {
    ticketsContainer.innerHTML = '';// Clear previous content
    tickets.forEach(function(ticket) {// Loop through tickets and add it to page
      const ticketDiv = document.createElement('div'); // Create elements for ticket details
      ticketDiv.className = 'ticket';
      const ticketId = document.createElement('h3');
      ticketId.textContent = `Ticket ID: ${ticket.id}`;
      const customerName = document.createElement('p');
      customerName.textContent = `Customer Name: User ${ticket.userId}`; // Using userId as placeholder
      const issueDescription = document.createElement('p');
      issueDescription.textContent = `Issue: ${ticket.title}`;
      const details = document.createElement('p');
      details.textContent = `Details: ${ticket.body}`;
      // Append details to ticket div
      ticketDiv.appendChild(ticketId);
      ticketDiv.appendChild(customerName);
      ticketDiv.appendChild(issueDescription);
      ticketDiv.appendChild(details);
      ticketsContainer.appendChild(ticketDiv)})};// Append ticket div to main container
  fetchTickets();// Initiate the process