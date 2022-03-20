<template>
  <section>
    <div class="">
      <img src="../assets/conert.png" alt="#" style="img-fluid" />
      <div class="container">
        <p class="fs-1">Concert Ticket</p>
      </div>
      <!-- selectprovince -->
      <!-- <div class="container">
        <div class="row">
          <div class="col">1st class</div>
          <div class="col">2st class</div>
          <div class="col">3st class</div>
        </div>
        <div class="row">
          <div class="col">total</div>
          <div class="col">total</div>
          <div class="col">total</div>
        </div>
      </div> -->
    </div>
  </section>
  <footer
    class="text-center text-white mt-10"
    style="background-color: #caced1"
  >
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2050 Copyright:
      <a class="text-white" href="#">Mood Ticket</a>
    </div>
  </footer>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
export default {
  components: {},
  data() {
    return {
      ticketshow: [],
      cartPurchase: [],
      status: 0,
    };
  },

  //่ อ่านค่าข้อมูล ที่อยู่ใน doc และเก็บเข้าไปใน array ของ ticketshow
  methods: {
    async readData() {
      const querySnapshot = await getDocs(collection(db, "location"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.ticketshow.push(doc.data());
      });
    },
    addCart(item) {
      this.cartPurchase.push({
        cartTime: item.dateTicket,
        cartDate: item.timeTicket,
        cartFrom: item.fromTicket,
        cartTo: item.toTicket,
        cartAirline: item.airlineTicket,
        cartPrice: item.priceTicket,
        cartName: item.name,
      });
    },

    //ฟังชั่นการลบบัตร ถ้าลบจะมีแจ้งเตือนว่า ต้องการลบบัตรหรือไม่
    deleteTicket1(index) {
      alert("Do you want remove this ticket ?");
      confirm(this.cartPurchase.splice(index, 1));
    },
    //ฟังชั่นการยืนยันการซื้อ โดนการแจ้งเตือนเมื่อกดปุ่มจ่ายเงินและแจ้งเตือนว่า ชำระเรียบร้อย
    deleteTicket2(item) {
      this.cartPurchase.splice(item);
      alert("Purchase success");
    },
    //ฟังชั่นการคำนวนเงินโดนการรวมค่าของราคา
    total: function () {
      var sum = 0;
      this.cartPurchase.forEach(function (item) {
        sum += item.cartPrice;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
#appview {
  background-color: rgb(248, 241, 232);
}
</style>
>
