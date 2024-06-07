// I'm currently interested in compression algorithms 
// I briefly looked at a diagram for Huffman encoding and 
// I'm giving it a shot building something similar first 
// then when I get stuck or feel like I've completed it 
// to a degree I'll study other code examples

// first part is to create a message 
// then traverse the bytes of that message 
// isolate each unique byte according to its value
// then we keep a count of each unique byte 
// then the next step is to give each a sort value
// based on that count (frequency)

// Let's create an array of unique byte objects
// with 3 properties - value, frequency, and sort rank

// Let's create a simple message to encode first 
let msg = "This is an example of an larger test message that will calculate Frequency of unique bytes"
let unique_bytes = []

// get the value of each letter 
for (let i=0;i<msg.length;i++) {
  // we should only push the object on the stack if 
  // it doesn't already exist in the list
  // if it does exist we increment the frequency value
  updated = false
  for (let u in unique_bytes) {
    if(msg.charCodeAt(i) === unique_bytes[u].value) {
      unique_bytes[u].frequency+=1
      updated = true 
    }     
  }  
  if (!updated) {
    unique_bytes.push( {
      value: msg.charCodeAt(i), // 0 - 255
      frequency: 1, // whatever the count is 
      sort_rank: 0 // rank based on its frequency
    } )    
  }  
}
console.log("Unique Byte list created with " + unique_bytes.length + " items from a total of " + msg.length + " bytes.")
unique_bytes.sort((a, b) => b.frequency - a.frequency);
var c = 1 // the current unique byte number
for (let u in unique_bytes) {
  unique_bytes[u].sort_rank = c
  console.log ("Unique Byte " + 
    "Character '" + String.fromCharCode(unique_bytes[u].value) + 
    "' | Value " + 
    unique_bytes[u].value + 
    " | Frequency " +  
    unique_bytes[u].frequency + 
    " | Sort Rank " +  
    unique_bytes[u].sort_rank)
  c+=1  
}


 