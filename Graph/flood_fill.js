



function floodFill(image, sr, sc, newColor) {
    const originalColor = image[sr][sc];
    if (originalColor === newColor) return image;

    const rows = image.length;
    const cols = image[0].length;

    const dfs = (r, c) => {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            image[r][c] !== originalColor
        ) {
            return;
        }

        image[r][c] = newColor;

        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    };

    dfs(sr, sc);
    return image;
}





// Input:
image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
]
sr = 1, sc = 1, newColor = 2

// Output:
[
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]
]