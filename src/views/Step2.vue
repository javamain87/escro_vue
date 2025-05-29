<template>
  <section class="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-[#e0eaff] text-[#1c1e21] px-6 py-10">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">거래 정보 입력</h2>

      <form @submit.prevent="goNext" class="space-y-6">
        <div>
          <label class="block font-medium mb-1">구분</label>
          <select v-model="form.role" class="w-full border p-2 rounded">
            <option value="buyer">구매자</option>
            <option value="seller">판매자</option>
          </select>
        </div>

        <div>
          <label class="block font-medium mb-1">결제 방식</label>
          <select v-model="form.payment" class="w-full border p-2 rounded">
            <option value="bank">계좌이체</option>
            <option value="coin">코인</option>
          </select>
        </div>

        <div>
          <label class="block font-medium mb-1">상호명</label>
          <input v-model="form.company" type="text" class="w-full border p-2 rounded" required />
        </div>

        <div>
          <label class="block font-medium mb-1">거래금액</label>
          <input v-model="form.amount" type="number" class="w-full border p-2 rounded" required />
        </div>

        <div>
          <label class="block font-medium mb-1">거래내용</label>
          <textarea v-model="form.description" class="w-full border p-2 rounded" rows="3" required></textarea>
        </div>

        <div>
          <label class="block font-medium mb-1">배송 예상 시간 (예: 3일)</label>
          <input v-model="form.deliveryTime" type="text" class="w-full border p-2 rounded" required />
        </div>

        <div>
          <label class="block font-medium mb-1">보안 문구</label>
          <input v-model="form.securityPhrase" type="text" class="w-full border p-2 rounded" placeholder="예: 5 + 3 = ?" />
        </div>

        <button type="submit" class="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          다음 단계
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  role: '',
  payment: '',
  company: '',
  amount: '',
  description: '',
  deliveryTime: '',
  securityPhrase: ''
})

const goNext = () => {
  if (form.value.role && form.value.payment) {
    router.push('/success')
  }
}
</script>
