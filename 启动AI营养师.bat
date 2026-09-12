@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist ".env" copy ".env.example" ".env" >nul
echo 正在启动 AI 营养师本地服务...
node server\index.mjs
pause
