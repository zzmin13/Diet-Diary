import axios from "axios";

class FoodSearch {
  constructor(key) {
    this.key = key;
  }
  async getFoodInformation(term) {
    const response = await axios.get(
      `http://apis.data.go.kr/1470000/FoodNtrIrdntInfoService/getFoodNtrItdntList?ServiceKey=${this.key}&type=json&desc_kor=${term}&pageNo=1&numOfRows=1`
    );
    console.log(response);
  }
}

export default FoodSearch;
