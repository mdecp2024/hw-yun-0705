# Step 1: 問題分析
# 給定初速度 (v0)、最終速度 (v) 和距離 (d)，求加速度 (a)

# Step 2: 使用適當的運動方程式
# 運動方程式為： v^2 = v0^2 + 2 * a * d

# 需要求加速度 a，因此我們將方程式改寫為 a 的形式

# Step 3: 計算加速度 a
# a = (v^2 - v0^2) / (2 * d)
# 因為最終速度 v = 0，因此公式簡化為： a = -v0^2 / (2 * d)

# Step 4: 單位轉換
# 如果初速度 v0 是以 km/h 為單位，需要轉換為 m/s
# v0_m_per_s = v0_km_per_h * (5/18)

# Python 程式碼
def calculate_acceleration(v0_km_per_h, distance_m):
    # 轉換初速度單位：從 km/h 轉換為 m/s
    v0_m_per_s = v0_km_per_h * (5 / 18)
    
    # 使用運動方程式計算加速度 a
    acceleration = -(v0_m_per_s ** 2) / (2 * distance_m)
    
    return acceleration

# 測試範例
initial_velocity_kmh = 200  # 初速度 (km/h)
distance_m = 800  # 距離 (m)

# 計算並顯示加速度
a = calculate_acceleration(initial_velocity_kmh, distance_m)
print(f"加速度 a = {a} m/s²")

