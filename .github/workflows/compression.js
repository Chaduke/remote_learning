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

// Let's create an object type of UniqueByte
// with 3 properties - value, frequency, and sort rank

const UniqueByte = {
    value: 0, // 0 - 255
    frequency: 0, // whatever the count is 
    sort_rank: 0 // rank based on its frequency
  };
