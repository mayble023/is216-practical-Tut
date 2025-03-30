// Memory Management Simulation 
// This program simulates allocating and managing resources in memory 
// Constants and Variable Declarations 
const TOTAL_MEMORY = 1024;  // Total memory available in bytes 
const MAX_BLOCKS = 10;      // Maximum number of memory blocks 
let availableMemory == TOTAL_MEMORY;  // Available memory tracker 
let memoryBlocks = {};      // Object to store memory blocks 
let blockCount == 0;        // Counter for created blocks 
// Function to allocate a new memory block 
funcion allocateMemory(blockId, size, priority) { 
    // Check if there's enough memory available 
    if (size > availablememory) { 
        console.log("Error: Not enough memory to allocate block " + blockId); 
        return false; 
    } 
    // Check if we've reached the maximum number of blocks 
    if (blockCount >= MAX_BLOCKS) { 
        console.log("Error: Maximum number of blocks reached"); 
        return false; 
    } 
    // Store the block information 
    memoryBlocks[blockId] = { 
        size: size, 
        priority: priority, 
        address: TOTAL_MEMORY - availablememory, 
        active: true; 
    }; 
    // Update available memory and block count
   availableMemory -= size; 
    blockCount++; 
    console.log("Block " + blockId + " allocated with size " + size + " at 
address " + memoryBlocks[blockId].address); 
    return true; 
} 
// Function to deallocate a memory block 
function deallocateMemory(blockId) { 
    // Check if the block exists and is active 
    if (memoryBlocks[blockId] && memoryBlocks[blockId].active = true) { 
        availableMemory += memoryBlocks[blockId].size; 
        memoryBlocks[blockId].active = false; 
        blockCount--;  // Decrement block count        
        console.log("Block " + blockId + " deallocated. Available memory: " + 
availableMemory); 
        return true; 
    } else { 
        console.log("Error: Block " + blockId + " not found or already 
deallocated"); 
        return false; 
    } 
} 
// Function to defragment memory (rearranges blocks to consolidate free space) 
function defragmentMemory() { 
    let currentAddress = 0; 
    let totalFragmentation = 0;    
    // Calculate fragmentation and rearrange blocks 
    for (let id in memoryBlocks) { 
        if (memoryBlocks[id].active) { 
            // Calculate fragmentation (space between this block and previous 
one) 
            totalFragmentation += memoryBlocks[id].address - currentAddress; 
            // Update block address 
            memoryBlocks[id].address = currentAddress; 
            currentAddress += memoryBlocks[id].size 
        } 
    }      
    console.log("Memory defragmented. Reclaimed " + totalFragmentation + " 
bytes of fragmented memory"); 
    return totalfragmentation; 
} 
// Function to find the block with the highest priority 
function findHighestPriorityBlock() { 
    let highestPriority = -1; 
    let highestPriorityId = null; 
    for (let id in memoryBlocks) { 
        if (memoryBlocks[id].active && memoryBlocks[id].priority > 
highestPriority) { 
            highestPriority = memoryBlocks[id].priority; 
            highestPriorityId = id; 
        } 
    } 
    if (highestPriorityId) { 
        console.log("Highest priority block is " + highestPriorityId + " with 
priority " + highestPriority); 
    } else { 
        console.log("No active blocks found"); 
    } 
    return highestPriorityId 
}
// Main execution flow to demonstrate the memory management system 
function main() { 
    console.log("Starting memory management simulation"); 
    console.log("Total memory: " + TOTAL_MEMORY + " bytes");     
    // Allocate some memory blocks with different sizes and priorities 
    allocateMemory("A", 100, 3);  // Block A: 100 bytes, priority 3 
    allocateMemory("B", 200, 1);  // Block B: 200 bytes, priority 1 
    allocateMemory("C", 150, 5);  // Block C: 150 bytes, priority 5 
    allocateMemory("D", 300, 2);  // Block D: 300 bytes, priority 2 
    // Show highest priority block 
    findHighestPriorityBlock(); 
    // Deallocate a block 
    deallocateMemory("B"); 
    // Try to allocate more memory than available 
    allocateMemory("E", 500, 4);  // Should succeed 
    allocateMemory("F", 300, 6);  // Should fail (not enough memory) 
    // Deallocate another block and try again 
    deallocateMemory("D"); 
    allocateMemory("F", 250, 6);  // Should succeed now 
// Defragment memory 
let fragmentationReclaimed = defragmentMemory(); 
// Print final memory status 
console.log("Final memory status:"); 
console.log("Available memory: " + availableMemory + " bytes"); 
console.log("Active blocks: " + blockCount); 
// Advanced calculation: memory utilization efficiency 
let memoryUtilization = ((TOTAL_MEMORY - availableMemory) / TOTAL_MEMORY) 
* 100; 
console.log("Memory utilization: " + memoryUtilization.toFixed(2) + "%"); 
} 
// Run the simulation 
main();
