var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼: fpqabi8 \n 個人倉儲:\xa0 https://github.com/mdecp2024/hw-yun-0705 \n 個人網站:  https://mdecp2024.github.io/hw-yun-0705 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w15', 'text': '( anchor )第一題 \n from browser import window\n\n# 這個函數用來計算 1 加到 100\ndef calculate_sum():\n    total = sum(range(1, 101))  # 使用 Python 的 sum 函數，計算從 1 到 100 的總和\n    print(f"總和是: {total}")\n    window.alert(f"總和是: {total}")  # 在瀏覽器彈出顯示結果\n\n# 呼叫函數計算並顯示結果\ncalculate_sum()\n \n ( addto )第二題', 'tags': '', 'url': 'w15.html'}, {'title': 'w14_ex', 'text': '三個圓相切 \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    # 創建一個 canvas 元素，並設置其寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    # 將創建的 canvas 元素添加到指定的 HTML div 元素中\n    brython_div = doc[id]  # 獲取指定 id 的 div 元素\n    brython_div <= canvas  # 將 canvas 插入到該 div 中\n    \n    # 獲取 canvas 的 2D 繪圖上下文，這是進行繪圖的主要接口\n    ctx = canvas.getContext("2d")\n    \n    # 返回畫布和它的 2D 繪圖上下文\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    """\n    生成一個隨機的 RGB 顏色字符串。\n    返回的顏色是 "rgb(r, g, b)" 格式，其中 r, g, b 是 0 到 255 之間的隨機整數。\n    """\n    r = random.randint(0, 255)  # 隨機生成紅色成分 (0-255)\n    g = random.randint(0, 255)  # 隨機生成綠色成分 (0-255)\n    b = random.randint(0, 255)  # 隨機生成藍色成分 (0-255)\n    return f"rgb({r}, {g}, {b})"  # 返回隨機顏色字符串\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    """\n    判斷一個點 (px, py) 是否位於圓 (cx, cy, r) 內。\n    (cx, cy) 為圓心坐標，r 為圓的半徑。\n    """\n    # 使用圓的方程 (px - cx)² + (py - cy)² <= r² 判斷點是否在圓內\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    """\n    根據傳入的三個圓的圓心和半徑，繪製圓形並使用掃描線算法填充區域。\n    x1, y1, r1 是圓1的圓心坐標和半徑\n    x2, y2, r2 是圓2的圓心坐標和半徑\n    x3, y3, r3 是圓3的圓心坐標和半徑\n    """\n    # 初始化畫布，創建並取得畫布和其 2D 上下文\n    canvas, ctx = initialize_canvas(400, 400)\n    \n    # 清空畫布，以便重新繪製\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    \n    # 顏色區域存儲字典，存儲不同區域的顏色\n    color_dict = {}\n\n    # 使用掃描線方法填充區域，逐行掃描畫布上的每個像素\n    for py in range(0, canvas.height):  # 遍歷每一行的 y 坐標\n        # 當前掃描線的顏色初始化為 None，後面會根據位置選擇顏色\n        current_color = None \n        \n        # 遍歷當前行中的每個像素點 (px, py)\n        for px in range(0, canvas.width):  # 遍歷每一列的 x 坐標\n            # 判斷該點是否在圓1內\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            # 判斷該點是否在圓2內\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            # 判斷該點是否在圓3內\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n            \n            if in_circle1 and in_circle2 and in_circle3:\n                # 如果點同時在三個圓內，則是交集區域\n                if "intersection" not in color_dict:\n                    # 如果還沒有為交集區域分配顏色，則分配一個隨機顏色\n                    color_dict["intersection"] = random_color_generator()\n                # 設置當前掃描線的顏色為交集區域的顏色\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 如果點同時在圓1和圓2內\n                if "circle1_and_2" not in color_dict:\n                    color_dict["circle1_and_2"] = random_color_generator()\n                current_color = color_dict["circle1_and_2"]\n            elif in_circle1 and in_circle3:\n                # 如果點同時在圓1和圓3內\n                if "circle1_and_3" not in color_dict:\n                    color_dict["circle1_and_3"] = random_color_generator()\n                current_color = color_dict["circle1_and_3"]\n            elif in_circle2 and in_circle3:\n                # 如果點同時在圓2和圓3內\n                if "circle2_and_3" not in color_dict:\n                    color_dict["circle2_and_3"] = random_color_generator()\n                current_color = color_dict["circle2_and_3"]\n            elif in_circle1:\n                # 如果點只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 如果點只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 如果點只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 如果點不在任何圓內，則是背景區域\n                current_color = "white"  # 背景色設為白色\n            \n            # 設置當前像素的顏色並進行填充\n            ctx.fillStyle = current_color\n            # 填充當前像素 (px, py)，並且寬度和高度均為 1 像素\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 直接設定三個圓的圓心和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100  # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 200, 100, 100  # 圓3：圓心 (200, 100)，半徑 100\n\n# 呼叫畫圓函式，並繪製三個圓\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3)\n \n \n 隨機圓相切 \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n    ctx = canvas.getContext("2d")\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 檢查所有圓是否有重疊\ndef ensure_no_isolated_circles(circles):\n    overlap = [False] * len(circles)\n    for i in range(len(circles)):\n        for j in range(i + 1, len(circles)):\n            cx1, cy1, r1 = circles[i]\n            cx2, cy2, r2 = circles[j]\n            distance = math.sqrt((cx1 - cx2) ** 2 + (cy1 - cy2) ** 2)\n            if distance <= r1 + r2:  # 判斷是否有重疊\n                overlap[i] = True\n                overlap[j] = True\n    return all(overlap)\n\n# 使用者設定的多個圓，並進行掃描線填充\ndef draw_circles():\n    canvas, ctx = initialize_canvas(400, 400)\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n\n    color_dict = {}\n\n    # 隨機生成 5 到 10 個圓，確保沒有圓是孤立的\n    while True:\n        num_circles = random.randint(5, 10)\n        circles = [\n            (random.randint(50, 350), random.randint(50, 350), random.randint(50, 100))\n            for _ in range(num_circles)\n        ]\n        if ensure_no_isolated_circles(circles):\n            break\n\n    for py in range(0, canvas.height):\n        for px in range(0, canvas.width):\n            overlapping_indices = []\n\n            for i, (cx, cy, r) in enumerate(circles):\n                if is_point_in_circle(px, py, cx, cy, r):\n                    overlapping_indices.append(i)\n\n            if overlapping_indices:\n                overlap_key = "_".join(map(str, sorted(overlapping_indices)))\n                if overlap_key not in color_dict:\n                    color_dict[overlap_key] = random_color_generator()\n                current_color = color_dict[overlap_key]\n            else:\n                current_color = "white"\n\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)\n\ndraw_circles() \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w13_hw', 'text': '( 畫出線框 ) \n from browser import html\nfrom browser import document as doc\n\n# 設置畫布\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke() \n \n ( 著色方塊 ) \n  引入 Brython 程式庫  \n \n \n  啟動 Brython  \n \n  設置容器  \n \n from browser import html\nfrom browser import document as doc\n\n# 設置畫布\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke()\n\n\n# 儲存幾何參數\nshapes = {\n    "circle1": (200, 200, 141.4),\n    "circle2": (300, 300, 141.4),\n    "square1": (100, 100, 300, 300),\n    "square2": (200, 200, 400, 400),\n}\n\n# 簡化的判定函式\ndef is_in_circle(x, y, cx, cy, r):\n    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\ndef is_in_square(x, y, x1, y1, x2, y2):\n    return x1 <= x <= x2 and y1 <= y <= y2\n\n# 根據點判定區域並返回顏色\ndef get_region_color(x, y):\n    c1 = is_in_circle(x, y, *shapes["circle1"])\n    c2 = is_in_circle(x, y, *shapes["circle2"])\n    s1 = is_in_square(x, y, *shapes["square1"])\n    s2 = is_in_square(x, y, *shapes["square2"])\n\n    # 不在任何圓內\n    if not c1 and not c2:\n        return None\n\n    # 同時在兩個圓內\n    if c1 and c2:\n        return "#FFE153"  \n\n     # 第一個圓的判定\n    if c1:\n        if s1:\n            return "#4A4AFF" if y < x else "#96FED1" \n        if y < shapes["square1"][1]:\n            return "#8e40bf"  \n        if y > shapes["square1"][3]:\n            return "#a6abc8"  \n        if x < shapes["square1"][0]:\n            return "#c1e401"  \n        if x > shapes["square1"][2]:\n            return "#fe522a"  \n\n    # 第二個圓的判定\n    if c2:\n        if s2:\n            return "#c6007c"  \n        if y < shapes["square2"][1]:\n            return "#000f96"  \n        if y > shapes["square2"][3]:\n            return "#e36e06"  \n        if x < shapes["square2"][0]:\n            return "#0b8a00"  \n        if x > shapes["square2"][2]:\n            return "#00809d"  \n\n    return "#D3D3D3"  # \n\n# 繪製掃描點並著色\ndef scan_and_draw():\n    step = 1  # 減小步長提升細膩程度\n    for y in range(0, canvas.height, step):\n        for x in range(0, canvas.width, step):\n            color = get_region_color(x, y)\n            if color:\n                ctx.fillStyle = color\n                ctx.fillRect(x, y, step, step)  # 使用細小矩形填充\n\n# 開始掃描和著色\nscan_and_draw() \n \n  利用 Brython 繪圖  \n \n  引入 Brython 程式庫  \n \n \n  啟動 Brython  \n \n  設置容器  \n \n  利用 Brython 繪圖  \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w12', 'text': '簡易for迴圈程式( for迴圈 ) \n \n 程式: \n n=10\nfor i in range(n):\n    print("現在的數字是",(i)) \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w11_hw', 'text': '題目一:( 以"*"畫出空心圓 ) \n 心得:利用ai打出需要的brython程式，過程中嘗試了解ai所打出程式的意思，但有理解的地方不多，還需要多加努力。 \n \n 程式: \n \n def print_circle():\n    # 11x11 的字元區域，圓心在 (5, 5)，半徑為 5\n    cx, cy, r = 5, 5, 5\n    \n    # 繪製空心圓\n    for y in range(11):\n        for x in range(11):\n            # 計算 (x, y) 是否在圓邊上\n            if abs((x - cx)**2 + (y - cy)**2 - r**2) < 2:\n                print(\'*\', end=\' \')\n            else:\n                print(\' \', end=\' \')\n        print()  # 換行\n\n# 呼叫函數顯示圓形\nprint_circle()\n \n 題目二:( 以方塊畫出空心圓 ) \n 心得:跟題目一一樣是靠ai打出 需要的brython程式，需要注意的地方在於讓方塊11*11(為了讓方塊有中心點)，該程式篇幅較上一題題目還長，理解程度還可以，但還是有看不懂的地方需要多認識一下。 \n \n 程式: \n \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n\n# gs*tc = canvas width and height\nctx = canvas.getContext("2d")\n\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\ndef grid(width, height, grid_pix):\n    # x 方向共 width 格\n    # y 方向共 height 格\n    # grid_pix, 每一個的 pixel 點數\n    # 利用迴圈與座標增量繪圖\n    for i in range(width):\n        for j in range(height):\n            dRect(i*grid_pix, j*grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\ndef fill(x, y, color):\n    # 填充指定格子\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)\n\ndef draw_hollow_circle(cx, cy, radius):\n    # cx, cy: 圆心坐标 (以格子为单位)\n    # radius: 半径 (以格子为单位)\n    for x in range(-radius, radius + 1):\n        for y in range(-radius, radius + 1):\n            # 检查点是否在圆的边缘\n            distance_squared = x**2 + y**2\n            if radius**2 - radius <= distance_squared <= radius**2 + radius:\n                fill(cx + x, cy + y, "black")\n\n# 繪製 20x20 網格\ngrid(20, 20, gs)\n\n# 在 (10, 10) 格為圓心繪製空心圓，半徑為 5 格\ndraw_hollow_circle(10, 10, 5)\n \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w10', 'text': '題目一: \n \n 題目二: \n \n 題目三: \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};