import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // 配置vite在运行的时候自动检测eslint规范
        eslintPlugin({
            include: [
                'src/**/*.ts',
                'src/**/*.js',
                'src/**/*.vue',
                'src/*.ts',
                'src/*.js',
                'src/*.vue'
            ]
        })
    ]
});
