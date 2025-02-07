<template>
    <div class="ai-tools-container">
      <div v-for="(tool, index) in tools" :key="index" class="ai-tool-item">
        <img :src="tool.logo" :alt="tool.name" class="ai-tool-logo" />
        <div class="ai-tool-info">
          <h3>{{ tool.name }}</h3>
          <p>{{ tool.description }}</p>
          <button @click="openTool(tool.link)">访问</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // const data = require('../data/tool/text.js');
  import {data} from '../data/tool/text.js';
  
  export default {
    data() {
      return {
        tools: data
      };
    },
    methods: {
      openTool(link) {
        window.open(link, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .ai-tools-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  .ai-tool-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .ai-tool-logo {
    width: 64px;
    height: 64px;
    margin-bottom: 0.5rem;
  }
  
  .ai-tool-info {
    text-align: left;
  }
  
  .ai-tool-info h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .ai-tool-info p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
  }
  
  .ai-tool-info button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  </style>