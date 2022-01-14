<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/display" class="navbar-brand">UserList</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/new" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

