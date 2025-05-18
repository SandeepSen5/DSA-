function findCircleNum(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinces = 0;
  
    const dfs = (i) => {
      for (let j = 0; j < n; j++) {
        if (isConnected[i][j] === 1 && !visited[j]) {
          visited[j] = true;
          dfs(j);
        }
      }
    };
  
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(i);
        provinces++;
      }
    }
  
    return provinces;
  }
  
  const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ];
  
  console.log(findCircleNum(isConnected)); 