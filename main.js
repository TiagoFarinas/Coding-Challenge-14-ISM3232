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
    errorMessage.textContent = error.message}};