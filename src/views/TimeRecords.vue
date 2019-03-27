<template>
  <div class="time-records-container">
    <h1 class="module-name">
      <div class="text">Time Records</div>
      <button class="create-button" @click="$router.push({name: 'create-time-record'})">Create</button>
    </h1>
    <table class="time-records-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time In</th>
          <th>Time Out</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in 30" :key="day">
          <td>January {{day}}, 2019</td>
          <td>10:00 AM</td>
          <td>07:00 PM</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.time-records-container {
  .module-name {
    margin-top: 0rem;
    font-size: 1.4rem;
    font-weight: 300;
  }

  .text {
    display: inline-block;
  }

  .create-button {
    padding: 0.5rem 1rem;
    border: 0;
    background-color: #2f78dd;
    color: #ffffff;
    margin-left: 1rem;
    outline: 0;
    border-radius: 4px;
    cursor: pointer;

    &.focus,
    &:active {
      opacity: 0.8;
    }
  }

  .time-records-table {
    padding: 0.7rem 0.5rem;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #f0f2f7;

    thead {
      tr {
        th {
          font-weight: normal;
          text-align: left;
          text-transform: uppercase;
          font-size: 0.8rem;
          color: #c7c3c3;
        }
      }
    }

    tbody {
      tr {
        td {
          border-bottom: 1px solid #f0f2f7;
          padding: 1rem;
          padding-left: 0rem;
          text-align: left;
          font-weight: 100;
        }
      }
    }
  }
}
</style>
