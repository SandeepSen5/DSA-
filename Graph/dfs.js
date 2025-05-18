function dfsIterative(graph, start) {
    const visited = new Set();
    const stack = [start];
  
    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
  
        // Push neighbors in reverse to maintain order
        for (let i = graph[node].length - 1; i >= 0; i--) {
          const neighbor = graph[node][i];
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }