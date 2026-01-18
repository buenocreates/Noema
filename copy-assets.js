const fs = require('fs');
const path = require('path');

const sourceGLB = '/Users/aoub/Downloads/lint.neocities.org/noema3d.glb';
const destGLB = path.join(__dirname, 'public', 'noema3d.glb');

const sourceSky = '/Users/aoub/Downloads/lint.neocities.org/lint.neocities.org/_assets/sky1.jpg';
const destSky = path.join(__dirname, 'public', 'sky1.jpg');

try {
    // Copy GLB file
    if (fs.existsSync(sourceGLB)) {
        fs.copyFileSync(sourceGLB, destGLB);
        console.log('✓ Copied noema3d.glb');
    } else {
        console.error('✗ Source GLB file not found:', sourceGLB);
    }

    // Copy sky image
    if (fs.existsSync(sourceSky)) {
        fs.copyFileSync(sourceSky, destSky);
        console.log('✓ Copied sky1.jpg');
    } else {
        console.error('✗ Source sky image not found:', sourceSky);
    }

    console.log('\nAll files copied! Restart your server.');
} catch (error) {
    console.error('Error copying files:', error);
}
