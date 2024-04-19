<script>
  import "../app.css";
  import "../fonts.css";
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  
  inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <style>
    *{
      font-family: 'Linik Sans';
    }
  </style>
</svelte:head>
  
<slot />
