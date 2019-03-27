<template>
  <div id="app">
    <div class="sidebar">
      <div class="user-container">
        <img class="user-image" src="@/assets/images/user.jpg">
        <span class="user-name">Jhen Andes</span>
        <span class="user-description">Mother of Dragons</span>
      </div>
      <div class="menu-container">
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/" :class="{active: currentPath === '/'}" exact>Dashboard</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/leaves" :class="{active: currentPath === '/leaves'}" exact>Leaves</router-link>
          </li>
          <li class="menu-item">
            <router-link
              to="/time-records"
              :class="{active: currentPath.includes('/time-records')}"
            >Time Records</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="topbar-container">
        <div>
          <span class="module-name">Daily Time Records</span>
        </div>
      </div>
      <div class="main-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: '',
    };
  },
  created() {
    this.currentPath = this.$router.history.current.path;
  },
  watch: {
    $route: function(to, from) {
      this.currentPath = to.path;
    },
  },
};
</script>

<style lang="scss">
html,
body {
  font-size: 16px;
  min-height: 100vh;
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;

  .sidebar {
    width: 13%;
    border-right: 1px solid #ebeef5;

    .user-container {
      display: flex;
      padding-top: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #ebeef5;
      flex-direction: column;
      align-items: center;
      .user-image {
        text-align: center;
        border-radius: 50%;
        width: 7rem;
        height: 7rem;
        box-shadow: rgb(235, 235, 235) 0px 0px 0px 2px !important;
        font-weight: 500;
      }
      .user-description {
        font-size: 0.65rem;
        color: #b3b4b9;
        margin-top: 0.1rem;
      }
      .user-name {
        margin-top: 0.5rem;
      }
    }

    .menu-container {
      .menu {
        list-style: none;
        padding-left: 0;

        .menu-item {
          transition: background-color 0.2s ease-in;

          padding: 0.6rem 1rem;
          margin-left: 0.5rem;
          margin-right: 0.5rem;

          a {
            color: inherit;
            text-decoration: none;
            &.active {
              color: #2f78dd;
              font-weight: 700;
            }
          }

          &:hover {
            background-color: #d0dff3;
          }
        }
      }
    }
  }
  .main {
    width: 85%;

    .topbar-container {
      padding: 0.8rem 1rem;
      background-color: #ffffff;
      border-bottom: 1px solid #ebeef5;
    }

    .main-container {
      padding: 0.8rem 1rem;
      background-color: #fbfbfd;
      min-height: 100%;
    }
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
