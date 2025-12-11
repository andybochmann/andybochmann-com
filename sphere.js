// Sphere animation with mouse interaction
class WireframeSphere {
  constructor(containerId, backgroundId) {
    this.container = document.getElementById(containerId);
    this.backgroundContainer = document.getElementById(backgroundId);
    this.mouse = { x: 0, y: 0 };
    this.targetRotation = { x: 0, y: 0 };
    this.currentRotation = { x: 0, y: 0 };
    this.isHovering = false;
    this.rotationSpeed = 1;
    this.targetRotationSpeed = 1;

    this.init();
    this.initBackground();
    this.animate();
    this.addEventListeners();
  }

  init() {
    // Scene setup for main sphere
    this.scene = new THREE.Scene();

    // Camera
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    this.camera.position.z = 4;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);

    // Create sphere group
    this.sphereGroup = new THREE.Group();
    this.scene.add(this.sphereGroup);

    // Create main wireframe sphere
    this.createWireframeSphere();

    // Create inner sphere
    this.createInnerSphere();

    // Create points on sphere
    this.createSpherePoints();
  }

  createWireframeSphere() {
    // Outer wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(1.2, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4a5568,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    this.wireframeSphere = new THREE.Mesh(geometry, material);
    this.sphereGroup.add(this.wireframeSphere);

    // Second layer
    const geometry2 = new THREE.IcosahedronGeometry(1.0, 2);
    const material2 = new THREE.MeshBasicMaterial({
      color: 0x5a6577,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    this.wireframeSphere2 = new THREE.Mesh(geometry2, material2);
    this.sphereGroup.add(this.wireframeSphere2);
  }

  createInnerSphere() {
    // Inner solid sphere with slight glow effect
    const geometry = new THREE.IcosahedronGeometry(0.7, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1a1a2e,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    this.innerSphere = new THREE.Mesh(geometry, material);
    this.sphereGroup.add(this.innerSphere);
  }

  createSpherePoints() {
    // Create points at vertices
    const pointsGeometry = new THREE.IcosahedronGeometry(1.2, 2);
    const positions = pointsGeometry.attributes.position;

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x8892a3,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    this.sphereGroup.add(points);

    // Additional points layer
    const pointsGeometry2 = new THREE.IcosahedronGeometry(1.0, 2);
    const pointsMaterial2 = new THREE.PointsMaterial({
      color: 0x9aa3b3,
      size: 0.025,
      transparent: true,
      opacity: 0.6,
    });
    const points2 = new THREE.Points(pointsGeometry2, pointsMaterial2);
    this.sphereGroup.add(points2);
  }

  initBackground() {
    // Background scene with floating particles
    this.bgScene = new THREE.Scene();

    const aspect = window.innerWidth / window.innerHeight;
    this.bgCamera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
    this.bgCamera.position.z = 5;

    this.bgRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.bgRenderer.setSize(window.innerWidth, window.innerHeight);
    this.bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.bgRenderer.setClearColor(0x0a0a0f, 1);
    this.backgroundContainer.appendChild(this.bgRenderer.domElement);

    // Create background particles
    this.createBackgroundParticles();

    // Create background spheres
    this.createBackgroundSpheres();
  }

  createBackgroundParticles() {
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x4a5568,
      size: 0.02,
      transparent: true,
      opacity: 0.4,
    });

    this.bgParticles = new THREE.Points(geometry, material);
    this.bgScene.add(this.bgParticles);
  }

  createBackgroundSpheres() {
    // Single large centered background sphere
    const geometry1 = new THREE.IcosahedronGeometry(4.5, 3);
    const material1 = new THREE.MeshBasicMaterial({
      color: 0x3d4758,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    this.bgSphere1 = new THREE.Mesh(geometry1, material1);
    this.bgSphere1.position.set(0, 0, -2);
    this.bgScene.add(this.bgSphere1);

    // Points on background sphere
    const pointsGeometry = new THREE.IcosahedronGeometry(4.5, 3);
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x6a7588,
      size: 0.04,
      transparent: true,
      opacity: 0.4,
    });
    this.bgPoints1 = new THREE.Points(pointsGeometry, pointsMaterial);
    this.bgPoints1.position.copy(this.bgSphere1.position);
    this.bgScene.add(this.bgPoints1);
  }

  addEventListeners() {
    // Mouse movement
    document.addEventListener("mousemove", (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Sphere container hover
    this.container.addEventListener("mouseenter", () => {
      this.targetRotationSpeed = 3;
    });
    this.container.addEventListener("mouseleave", () => {
      this.targetRotationSpeed = 1;
    });

    // Window resize
    window.addEventListener("resize", () => this.onResize());
  }

  onResize() {
    // Update main sphere
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );

    // Update background
    const bgAspect = window.innerWidth / window.innerHeight;
    this.bgCamera.aspect = bgAspect;
    this.bgCamera.updateProjectionMatrix();
    this.bgRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Smooth rotation speed transition
    this.rotationSpeed +=
      (this.targetRotationSpeed - this.rotationSpeed) * 0.05;

    // Smooth mouse following
    this.targetRotation.x = this.mouse.y * 0.5;
    this.targetRotation.y = this.mouse.x * 0.5;

    this.currentRotation.x +=
      (this.targetRotation.x - this.currentRotation.x) * 0.05;
    this.currentRotation.y +=
      (this.targetRotation.y - this.currentRotation.y) * 0.05;

    // Rotate main sphere based on mouse
    this.sphereGroup.rotation.x = this.currentRotation.x;
    this.sphereGroup.rotation.y = this.currentRotation.y;

    // Add subtle continuous rotation (speed affected by hover)
    this.wireframeSphere.rotation.x += 0.001 * this.rotationSpeed;
    this.wireframeSphere.rotation.y += 0.002 * this.rotationSpeed;
    this.wireframeSphere2.rotation.x -= 0.0015 * this.rotationSpeed;
    this.wireframeSphere2.rotation.y -= 0.001 * this.rotationSpeed;
    this.innerSphere.rotation.x += 0.002 * this.rotationSpeed;
    this.innerSphere.rotation.y -= 0.001 * this.rotationSpeed;

    // Animate background
    this.bgParticles.rotation.y += 0.0002;
    this.bgParticles.rotation.x += 0.0001;

    this.bgSphere1.rotation.x += 0.0008;
    this.bgSphere1.rotation.y += 0.001;
    this.bgPoints1.rotation.copy(this.bgSphere1.rotation);

    // Background sphere reacts slightly to mouse
    this.bgSphere1.rotation.x += this.mouse.y * 0.001;
    this.bgSphere1.rotation.y += this.mouse.x * 0.001;

    // Render
    this.renderer.render(this.scene, this.camera);
    this.bgRenderer.render(this.bgScene, this.bgCamera);
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new WireframeSphere("sphere-container", "background-canvas");
});
