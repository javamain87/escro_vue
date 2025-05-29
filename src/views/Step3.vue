
<template>
  <section class="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-[#e0eaff] text-[#1c1e21] px-6 py-10">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">거래 진행 상황</h2>

      <div class="space-y-6">
        <div class="p-4 border rounded-lg bg-gray-50">
          <h3 class="text-lg font-semibold mb-2">판매자 승인 상태</h3>
          <p :class="sellerApproved ? 'text-green-600' : 'text-yellow-600'">
            {{ sellerApproved ? '✅ 판매자 승인 완료' : '⏳ 판매자 승인 대기 중' }}
          </p>
        </div>

        <div class="p-4 border rounded-lg bg-gray-50">
          <h3 class="text-lg font-semibold mb-2">구매자 입금 상태</h3>
          <p :class="buyerPaid ? 'text-green-600' : 'text-yellow-600'">
            {{ buyerPaid ? '✅ 입금 완료' : '⏳ 입금 대기 중' }}
          </p>
        </div>

        <div class="flex gap-4 mt-6 justify-center">
          <button @click="toggleSellerApproval" class="py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700">
            판매자 승인
          </button>
          <button @click="toggleBuyerPayment" class="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
            구매자 입금
          </button>
        </div>

        <div v-if="sellerApproved && buyerPaid" class="mt-8 text-center">
          <p class="text-lg font-semibold text-blue-600 mb-4">🎉 거래가 성공적으로 진행되었습니다!</p>
          <button @click="finish" class="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            완료
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const sellerApproved = ref(false)
const buyerPaid = ref(false)

const toggleSellerApproval = () => {
  sellerApproved.value = true
}

const toggleBuyerPayment = () => {
  buyerPaid.value = true
}

const finish = () => {
  router.push('/success')
}
</script>
