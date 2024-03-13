# VRLab

## 介绍

### 开发环境

- Node.js with React
- VSCode (as IDE)

### 使用到的库

- [react-three-fiber](https://docs.pmnd.rs/react-three-fiber)

## 复现方法

```bash
git clone https://github.com/mmdjiji/vrlab
cd vrlab
npm install
npm run dev
```

## Lab1

[在线演示](https://jiji.pro/vrlab/lab1)

### 实验内容

建立一个编程环境，实现读入三维物体，进行线框显示，shading, 纹理映射以及旋转，zoom in/out等功能。

读入的三维模型： 点云，mesh、volume model, NURBS

### 效果截图

### 方法

首先先建立一个 3D 模型，我选择在 https://readyplayer.me 中建立一个人物的 3D 模型用于学习如何使用 Three.js 渲染。

在建立完成后，会得到一个glb文件，这个文件相当于三角片（mesh）的 3D 模型，同时包含贴图等其他信息。

使用库提供的代码加载模型:
```js
const model = useLoader(
  GLTFLoader,
  "/vrlab/avatar.glb"
);
```

加载到内存中，需要绘制模型，核心代码为:
```js
<mesh ref={mySelfRef}>
  <hemisphereLight intensity={0.15} />
  <ambientLight />
  <primitive
    object={model.scene}
    scale={1}
  />
</mesh>
```

为了让模型可以平移旋转，我们一个比较聪明的方法是再添加一个摄像机，只旋转摄像机。基于 Canvas 可以很容易地实现这一切:
```js
<Canvas
  style={{ backgroundColor: "white" }}
  camera={{ position: [1, 1, 4] }}
>
  <Orbit />
</Canvas>
```