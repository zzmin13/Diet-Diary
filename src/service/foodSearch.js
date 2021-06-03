import axios from "axios";

class FoodSearch {
  constructor(key) {
    this.key = key;
  }
  async getFoodInformation(term) {
    const URL = `/1470000/FoodNtrIrdntInfoService/getFoodNtrItdntList?ServiceKey=${this.key}&type=json&desc_kor=${term}&pageNo=1&numOfRows=1`;
    const response = await axios.get(URL);
    console.log(response);
  }
}

export default FoodSearch;
