/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function random(seed) {\n    rnum += 1\n    var x = Math.sin(seed + rnum) * 10000;\n    console.log(x - Math.floor(x))\n    return x - Math.floor(x);\n}\n\nCOLORS = {}\nCOLORS.offblack = \"#202020\"\nCOLORS.red = \"#FB3640\"\nCOLORS.dkgray = \"#333333\"\nCOLORS.ltgray = \"#E3E3E3\"\nCOLORS.tea = \"#D4E4BC\"\nCOLORS.white = \"#FFFFFF\"\nCOLORS.black = \"#000000\"\nCOLORS.brown = \"#3D0C11\"\nCOLORS.coffee = \"#3A3335\"\nCOLORS.ruby = \"#D81E5B\"\nCOLORS.gray = \"#A499B3\"\nCOLORS.mint = \"#B2FFA9\"\nCOLORS.violet = \"#855988\"\nCOLORS.purple = \"#7D5BA6\"\nCOLORS.blue = \"#070b34\"\nCOLORS.gold = \"#AE8E1C\"\nCOLORS.orange = \"#FA7921\"\nCOLORS.chessColors = [\"#2E4860\", \"#EBEAD3\"]\n\nIMAGES = {}\nIMAGES.azari = {}\nIMAGES.azari.pupil = \"https://i.imgur.com/wvqO33n.png\"\nIMAGES.azari.rogue = \"https://i.imgur.com/Nsirs63.png\"\nIMAGES.azari.knight = \"https://i.imgur.com/Nsirs63.png\"\nIMAGES.azari.bishop = \"https://i.imgur.com/Mqz1ZPY.png\"\nIMAGES.azari.queen = \"https://i.imgur.com/GyTasG0.png\"\nIMAGES.azari.king = \"https://i.imgur.com/ua1sRot.png\"\nIMAGES.cesesi = {}\nIMAGES.cesesi.peasant = \"https://i.imgur.com/tZHLf36.png\"\nIMAGES.cesesi.rook = \"https://i.imgur.com/nuIw1ES.png\"\nIMAGES.cesesi.knight = \"https://i.imgur.com/gIdqk1s.png\"\nIMAGES.cesesi.ballistic = \"https://i.imgur.com/KQeiwMv.png\"\nIMAGES.cesesi.queen = \"https://i.imgur.com/q0Ry6je.png\"\nIMAGES.cesesi.king = \"https://i.imgur.com/COeS7l8.png\"\nIMAGES.chess = {}\nIMAGES.chess.king = \"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg\"\nIMAGES.chess.pawn = \"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg\"\nIMAGES.chess.rook = \"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg\"\nIMAGES.chess.knight = \"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg\"\nIMAGES.chess.bishop = \"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg\"\nIMAGES.chess.queen = \"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg\"\nIMAGES.chess.eking = \"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg\"\nIMAGES.chess.epawn = \"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg\"\nIMAGES.chess.erook = \"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg\"\nIMAGES.chess.eknight = \"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg\"\nIMAGES.chess.ebishop = \"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg\"\nIMAGES.chess.equeen = \"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg\"\n\ndocument.addEventListener('contextmenu', e => e.preventDefault());\n\napp = document.createElement(\"div\")\napp.id = \"app\"\ndocument.body.appendChild(app)\n\ngsize = 160\npadding = 20\nn = 6\n\nboard = document.createElement(\"canvas\")\nboard.id = \"board\"\nboard.width = (2 + gsize) * n + 2 * padding\nboard.height = (2 + gsize) * n + 2 * padding\napp.appendChild(board)\n\ninfodiv = document.createElement(\"div\")\ninfodiv.id = \"infodiv\"\napp.appendChild(infodiv)\n\ncontrols = document.createElement(\"p\")\ncontrols.id = \"controls\"\ncontrols.innerHTML = \"Objective is to remove all black pieces. <br /> Left Click: Select <br /> Right Click: Cancel <br /> Q: ← <br /> E: → <br /> Space: Proceed\"\ninfodiv.appendChild(controls)\n\nfunction xy2rc(x, y) {\n  var c = Math.floor((x - padding) / gsize)\n  var r = Math.floor((y - padding) / gsize)\n\n  if (r >= 0 && r < n && c >= 0 && c < n) {\n    return [r, c]\n  }\n  else {\n    return [-1, -1]\n  }\n}\n\ngrid = new Array(n)\nfor (var i = 0; i < n; i++) {\n  grid[i] = new Array(n);\n  for (var j = 0; j < n; j++) {\n    grid[i][j] = 0\n  }\n}\n\nfunction copyGrid(otherGrid) {\n  g = new Array(n);\n  for (var i = 0; i < n; i++) {\n    g[i] = new Array(n);\n    for (var j = 0; j < n; j++) {\n      g[i][j] = otherGrid[i][j]\n    }\n  }\n\n  return g\n}\n\nfunction isReachable(i, j) {\n  for (var k = 0; k < reachable.length; k++) {\n    if (i == reachable[k][0] && j == reachable[k][1]) {\n      return true\n    }\n  }\n\n  return false\n}\n\nfunction drawCell(i, j) {\n  if (i < 0 || i >= n || j < 0 || j >= n) {\n    return\n  }\n\n  ctx.fillStyle = COLORS.chessColors[1 - (i + j) % 2]\n  ctx.fillRect(padding + j * gsize, padding + i * gsize, gsize, gsize)\n\n  var hsize = gsize * 0.9\n  var vsize = hsize\n  var hpad = (gsize - hsize) / 2\n  var vpad = (gsize - vsize) / 2\n\n  if (grid[i][j] != 0) {\n    if (i == selected[0] && j == selected[1]) {\n      ctx.fillStyle = COLORS.gold\n      ctx.fillRect(padding + j * gsize + hpad, padding + i * gsize + vpad, gsize - 2 * hpad, gsize - 2 * vpad)\n    }\n\n    ctx.drawImage(grid[i][j], padding + j * gsize + hpad, padding + i * gsize + vpad, hsize, vsize)\n  }\n\n  if (isReachable(i, j)) {\n    if (grid[i][j] == 0) {\n      ctx.strokeStyle = COLORS.gold\n      ctx.strokeRect(padding + j * gsize + (gsize / 2) - 10, padding + i * gsize + (gsize / 2) - 10, 20, 20)\n    }\n    else {\n      ctx.strokeStyle = COLORS.red\n      ctx.strokeRect(padding + j * gsize + (gsize / 2) - 10, padding + i * gsize + (gsize / 2) - 10, 20, 20)\n    }\n  }\n\n  if (isEnemy(grid[i][j])) {\n    var num = getEnemyOrder(i, j)\n\n    if (num > 0) {\n      ctx.fillStyle = COLORS.black\n      ctx.font = \"32px Arial\"\n      ctx.fillText(enemyMoves.length - num + 1, padding + j * gsize + 5, padding + i * gsize + 28)\n    }\n  }\n\n}\n\nfunction getEnemyOrder(i, j) {\n  for (var k = 0; k < enemyMoves.length; k++) {\n    if (enemyMoves[k][1] == i && enemyMoves[k][2] == j) {\n      return k + 1\n    }\n  }\n\n  return 0\n}\n\nfunction drawGrid() {\n  console.log(\"DRAW!\")\n  info.innerHTML = `Timeline: ${time}/${ghistory.length - 1} <br /> ${enemyMoves.length == 0 ? \"You\" : \"Enemy\"}`\n\n  ctx = board.getContext('2d')\n\n  ctx.fillStyle = COLORS.black\n  ctx.fillRect(0, 0, n * gsize + padding * 2, n * gsize + padding * 2)\n\n  ctx.lineWidth = 4\n  ctx.strokeStyle = COLORS.black\n\n  for (var i = 0; i < n; i++) {\n    for (var j = 0; j < n; j++) {\n      drawCell(i, j)\n    }\n  }\n}\n\nloadedImages = {}\nfor (const [k1, v1] of Object.entries(IMAGES)) {\n  loadedImages[k1] = {}\n\n  for (const [k2, v2] of Object.entries(v1)) {\n    var img = new Image()\n    img.src = v2\n    loadedImages[k1][k2] = img\n  }\n}\n\nfunction deselect(r, c) {\n  if (r == -1 || c == -1) {\n    selected[0] = -1\n    selected[1] = -1\n    reachable = []\n    drawGrid()\n  }\n  else {\n    if (!isEnemy(grid[r][c])) {\n      if (selected[0] == -1 && selected[1] == -1) {\n        selected[0] = -1\n        selected[1] = -1\n        reachable = []\n      }\n      else {\n        selected[0] = -1\n        selected[1] = -1\n        reachable = []\n        drawGrid()\n      }\n    }\n  }\n}\n\nfunction spaceAlly(r, c) {\n  if (r >= 0 && r < n && c >= 0 && c < n) {\n    return isAlly(grid[r][c])\n  }\n\n  return false\n}\n\nfunction isAlly(pic) {\n  return (pic == loadedImages.chess.pawn || pic == loadedImages.chess.rook || pic == loadedImages.chess.knight || pic == loadedImages.chess.bishop || pic == loadedImages.chess.queen || pic == loadedImages.chess.king)\n}\n\nfunction spaceEnemy(r, c) {\n  if (r >= 0 && r < n && c >= 0 && c < n) {\n    return isEnemy(grid[r][c])\n  }\n\n  return false\n}\n\nfunction isEnemy(pic) {\n  return (pic == loadedImages.chess.epawn || pic == loadedImages.chess.erook || pic == loadedImages.chess.eknight || pic == loadedImages.chess.ebishop || pic == loadedImages.chess.equeen || pic == loadedImages.chess.eking)\n}\n\nfunction spaceFree(r, c) {\n  if (r >= 0 && r < n && c >= 0 && c < n) {\n    if (grid[r][c] == 0) {\n      return true\n    }\n  }\n\n  return false\n}\n\nfunction spaceFreeEnemy(r, c) {\n  return spaceEnemy(r, c) || spaceFree(r, c)\n}\n\nfunction spaceFreeAlly(r, c) {\n  return spaceAlly(r, c) || spaceFree(r, c)\n}\n\n\nfunction reachHorizontal(r, c, range, arr) {\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r, c + i)) {\n      arr.push([r, c + i])\n\n      if (spaceEnemy(r, c + i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r, c - i)) {\n      arr.push([r, c - i])\n\n      if (spaceEnemy(r, c - i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n}\n\nfunction reachVertical(r, c, range, arr) {\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r + i, c)) {\n      arr.push([r + i, c])\n\n      if (spaceEnemy(r + i, c)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r - i, c)) {\n      arr.push([r - i, c])\n\n      if (spaceEnemy(r - i, c)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n}\n\nfunction reachDiagonal(r, c, range, arr) {\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r + i, c + i)) {\n      arr.push([r + i, c + i])\n\n      if (spaceEnemy(r + i, c + i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r - i, c - i)) {\n      arr.push([r - i, c - i])\n\n      if (spaceEnemy(r - i, c - i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r - i, c + i)) {\n      arr.push([r - i, c + i])\n\n      if (spaceEnemy(r - i, c + i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeEnemy(r + i, c - i)) {\n      arr.push([r + i, c - i])\n\n      if (spaceEnemy(r + i, c - i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n}\n\nfunction reachKnight(r, c, arr) {\n  if (spaceFreeEnemy(r - 2, c + 1)) {\n    arr.push([r - 2, c + 1])\n  }\n\n  if (spaceFreeEnemy(r - 2, c - 1)) {\n    arr.push([r - 2, c - 1])\n  }\n\n  if (spaceFreeEnemy(r + 2, c + 1)) {\n    arr.push([r + 2, c + 1])\n  }\n\n  if (spaceFreeEnemy(r + 2, c - 1)) {\n    arr.push([r + 2, c - 1])\n  }\n\n  if (spaceFreeEnemy(r - 1, c + 2)) {\n    arr.push([r - 1, c + 2])\n  }\n\n  if (spaceFreeEnemy(r + 1, c + 2)) {\n    arr.push([r + 1, c + 2])\n  }\n\n  if (spaceFreeEnemy(r - 1, c - 2)) {\n    arr.push([r - 1, c - 2])\n  }\n\n  if (spaceFreeEnemy(r + 1, c - 2)) {\n    arr.push([r + 1, c - 2])\n  }\n\n}\n\nfunction ereachHorizontal(r, c, range, arr) {\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r, c + i)) {\n      arr.push([r, c + i])\n\n      if (spaceAlly(r, c + i)) {\n        break\n      }\n    }\n    else  {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r, c - i)) {\n      arr.push([r, c - i])\n\n      if (spaceAlly(r, c - i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n}\n\nfunction ereachVertical(r, c, range, arr) {\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r + i, c)) {\n      arr.push([r + i, c])\n\n      if (spaceAlly(r + i, c)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r - i, c)) {\n      arr.push([r - i, c])\n\n      if (spaceAlly(r - i, c)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n}\n\nfunction ereachDiagonal(r, c, range, arr) {\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r + i, c + i)) {\n      arr.push([r + i, c + i])\n\n      if (spaceAlly(r + i, c + i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r - i, c - i)) {\n      arr.push([r - i, c - i])\n\n      if (spaceAlly(r - i, c - i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r - i, c + i)) {\n      arr.push([r - i, c + i])\n\n      if (spaceAlly(r - i, c + i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n  for (var i = 1; i <= range; i += 1) {\n    if (spaceFreeAlly(r + i, c - i)) {\n      arr.push([r + i, c - i])\n\n      if (spaceAlly(r + i, c - i)) {\n        break\n      }\n    }\n    else {\n      break\n    }\n  }\n\n}\n\nfunction ereachKnight(r, c, arr) {\n  if (spaceFreeAlly(r - 2, c + 1)) {\n    arr.push([r - 2, c + 1])\n  }\n\n  if (spaceFreeAlly(r - 2, c - 1)) {\n    arr.push([r - 2, c - 1])\n  }\n\n  if (spaceFreeAlly(r + 2, c + 1)) {\n    arr.push([r + 2, c + 1])\n  }\n\n  if (spaceFreeAlly(r + 2, c - 1)) {\n    arr.push([r + 2, c - 1])\n  }\n\n  if (spaceFreeAlly(r - 1, c + 2)) {\n    arr.push([r - 1, c + 2])\n  }\n\n  if (spaceFreeAlly(r + 1, c + 2)) {\n    arr.push([r + 1, c + 2])\n  }\n\n  if (spaceFreeAlly(r - 1, c - 2)) {\n    arr.push([r - 1, c - 2])\n  }\n\n  if (spaceFreeAlly(r + 1, c - 2)) {\n    arr.push([r + 1, c - 2])\n  }\n\n}\n\nfunction select(r, c) {\n  if (r < 0 || enemyMoves.length > 0) {\n    return\n  }\n\n  var redraw = false\n  if (grid[r][c] == loadedImages.chess.pawn) {\n    selected[0] = r\n    selected[1] = c\n\n    reachable = []\n\n    if (spaceFree(r - 1, c)) {\n      reachable.push([r - 1, c])\n\n      if (r == n - 2 && spaceFree(r - 2, c)) {\n        reachable.push([r - 2, c])\n      }\n    }\n\n    if (spaceEnemy(r - 1, c - 1)) {\n      reachable.push([r - 1, c - 1])\n    }\n\n    if (spaceEnemy(r - 1, c + 1)) {\n      reachable.push([r - 1, c + 1])\n    }\n\n    redraw = true\n  }\n  else if (grid[r][c] == loadedImages.chess.king) {\n    selected[0] = r\n    selected[1] = c\n\n    reachable = []\n    reachVertical(r, c, 1, reachable)\n    reachHorizontal(r, c, 1, reachable)\n    reachDiagonal(r, c, 1, reachable)\n\n    redraw = true\n  }\n\n  else if (grid[r][c] == loadedImages.chess.rook) {\n    selected[0] = r\n    selected[1] = c\n\n    reachable = []\n    reachVertical(r, c, n, reachable)\n    reachHorizontal(r, c, n, reachable)\n\n    redraw = true\n  }\n  else if (grid[r][c] == loadedImages.chess.knight) {\n    selected[0] = r\n    selected[1] = c\n\n    reachable = []\n    reachKnight(r, c, reachable)\n\n    redraw = true\n  }\n  else if (grid[r][c] == loadedImages.chess.bishop) {\n    selected[0] = r\n    selected[1] = c\n\n    reachable = []\n    reachDiagonal(r, c, n, reachable)\n\n    redraw = true\n  }\n  else if (grid[r][c] == loadedImages.chess.queen) {\n    selected[0] = r\n    selected[1] = c\n\n    reachable = []\n    reachVertical(r, c, n, reachable)\n    reachHorizontal(r, c, n, reachable)\n    reachDiagonal(r, c, n, reachable)\n\n    redraw = true\n  }\n  else {\n    if (isReachable(r, c)) {\n      // move\n      grid[r][c] = grid[selected[0]][selected[1]]\n      grid[selected[0]][selected[1]] = 0\n\n      ghistory.splice(time + 1)\n      ghistory.push(copyGrid(grid))\n      time += 1\n\n      reachable = []\n      selected[0] = -1\n      selected[1] = -1\n      enemyTurnSetup()\n\n      redraw = true\n    }\n  }\n\n  if (redraw) {\n    drawGrid()\n  }\n}\n\nboard.addEventListener('contextmenu', e => {\n  var rc = xy2rc(e.clientX, e.clientY)\n  deselect(rc[0], rc[1])\n})\n\nboard.addEventListener('click', e => {\n  if (e.button != 0) {\n    return\n  }\n\n  var rc = xy2rc(e.clientX, e.clientY)\n\n  if (selected[0] != rc[0] || selected[1] != rc[1]) {\n    select(rc[0], rc[1])\n  }\n}, false)\n\nwindow.addEventListener(\"keydown\", event => {\n  if (event.isComposing || event.keyCode == 229) {\n    return\n  }\n\n  if (event.keyCode == 81) {\n    if (time > 0 && enemyMoves.length == 0) {\n      time--\n      grid = copyGrid(ghistory[time])\n      enemyMoves = []\n\n      reachable = []\n      selected[0] = -1\n      selected[1] = -1\n      drawGrid()\n    }\n\n  }\n  else if (event.keyCode == 69) {\n    if (time < ghistory.length - 1) {\n      time++\n      grid = copyGrid(ghistory[time])\n      enemyMoves = []\n\n      reachable = []\n      selected[0] = -1\n      selected[1] = -1\n      drawGrid()\n    }\n  }\n  else if (event.keyCode == 32) {\n    if (enemyMoves.length > 0) {\n      enemyTurnStep()\n    }\n  }\n  else if (event.keyCode == 13) {\n    while (enemyMoves.length > 0) {\n      enemyTurnStep()\n    }\n  }\n});\n\ntime = 0\nselected = [-1, -1]\nreachable = []\n\nstartSeed = Math.floor(Math.random() * 10000)\nrnum = 0\n\naggressive = 1\nenemyMoves = []\n\ninfo = document.createElement(\"p\")\ninfo.id = \"info\"\ninfodiv.appendChild(info)\n\nwindow.onload = function() {\n  for (var i = 0; i < n; i++) {\n    grid[1][i] = loadedImages.chess.epawn\n    grid[4][i] = loadedImages.chess.pawn\n  }\n\n  grid[0][0] = loadedImages.chess.erook\n  grid[5][0] = loadedImages.chess.rook\n  grid[0][1] = loadedImages.chess.ebishop\n  grid[5][1] = loadedImages.chess.bishop\n  grid[0][2] = loadedImages.chess.equeen\n  grid[5][2] = loadedImages.chess.queen\n  grid[0][3] = loadedImages.chess.eking\n  grid[5][3] = loadedImages.chess.king\n  grid[0][4] = loadedImages.chess.eknight\n  grid[5][4] = loadedImages.chess.knight\n  grid[0][5] = loadedImages.chess.erook\n  grid[5][5] = loadedImages.chess.rook\n\n  ghistory = [copyGrid(grid)]\n\n  drawGrid()\n}\n\nfunction enemyTurnSetup() {\n  var enemies = []\n  for (var i = 0; i < n; i++) {\n    for (var j = 0; j < n; j++) {\n      if (isEnemy(grid[i][j])) {\n        enemies.push([grid[i][j], i, j])\n      }\n    }\n  }\n\n  rnum = 0\n\n  var l = enemies.length\n  for (var i = 0; i < l; i++) {\n    index = Math.floor(random(startSeed + time) * enemies.length)\n    enemyMoves.push(enemies[index])\n    enemies.splice(index, 1)\n  }\n}\n\nfunction enemyTurnStep() {\n  var img = enemyMoves[enemyMoves.length - 1][0]\n  var r = enemyMoves[enemyMoves.length - 1][1]\n  var c = enemyMoves[enemyMoves.length - 1][2]\n\n  console.log(img)\n\n  var spaces = []\n  if (img == loadedImages.chess.epawn) {\n    if (spaceFree(r + 1, c)) {\n      spaces.push([r + 1, c])\n\n      if (r == 1 && spaceFree(r + 2, c)) {\n        spaces.push([r + 2, c])\n      }\n    }\n\n    if (spaceAlly(r + 1, c - 1)) {\n      spaces.push([r + 1, c - 1])\n    }\n\n    if (spaceAlly(r + 1, c + 1)) {\n      spaces.push([r + 1, c + 1])\n    }\n  }\n  else if (img == loadedImages.chess.eking) {\n    ereachVertical(r, c, 1, spaces)\n    ereachHorizontal(r, c, 1, spaces)\n    ereachDiagonal(r, c, 1, spaces)\n  }\n  else if (img == loadedImages.chess.erook) {\n    ereachVertical(r, c, n, spaces)\n    ereachHorizontal(r, c, n, spaces)\n  }\n  else if (img == loadedImages.chess.eknight) {\n    ereachKnight(r, c, spaces)\n  }\n  else if (img == loadedImages.chess.ebishop) {\n    ereachDiagonal(r, c, n, spaces)\n  }\n  else if (img == loadedImages.chess.equeen) {\n    ereachVertical(r, c, n, spaces)\n    ereachHorizontal(r, c, n, spaces)\n    ereachDiagonal(r, c, n, spaces)\n  }\n\n  // move (enemy)\n\n  if (aggressive) {\n    var newspaces = []\n    var canAttack = false\n    for (var i = 0; i < spaces.length; i++) {\n      if (spaceAlly(spaces[i][0], spaces[i][1])) {\n        canAttack = true\n        newspaces.push([spaces[i][0], spaces[i][1]])\n      }\n    }\n\n    if (canAttack) {\n      spaces = newspaces\n    }\n  }\n\n  var snum = Math.floor(spaces.length * random(startSeed + time))\n  console.log(spaces, snum)\n  if (spaces.length > 0) {\n    var targetr = spaces[snum][0]\n    var targetc = spaces[snum][1]\n\n    grid[targetr][targetc] = img\n    grid[r][c] = 0\n  }\n\n  if (img == loadedImages.chess.epawn && targetr == n - 1) {\n    if (random(startSeed + time) < 0.5) {\n      grid[targetr][targetc] = loadedImages.chess.equeen\n    }\n    else {\n      grid[targetr][targetc] = loadedImages.chess.eknight\n    }\n  }\n\n  enemyMoves.splice(enemyMoves.length - 1)\n\n  if (enemyMoves.length == 0) {\n    ghistory[time] = copyGrid(grid)\n  }\n\n  drawGrid()\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;