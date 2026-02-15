body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #0b1220;
    color: white;
}
.app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.header {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #1f2937;
}
.chat-container {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}
.message {
    max-width: 60%;
    padding: 12px;
    margin: 10px 0;
    border-radius: 12px;
}
.bot {
    background: #1f2937;
}
.user {
    background: #2563eb;
    margin-left: auto;
}
.input-container {
    display: flex;
    padding: 15px;
    border-top: 1px solid #1f2937;
}
input {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: none;
    margin-right: 10px;
}
button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
}
