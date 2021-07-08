import axios from "axios";

class FoodSearch {
  constructor(key) {
    this.key = key;
  }
  async getFoodInformation(term) {
    // const URL = `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1470000/FoodNtrIrdntInfoService/getFoodNtrItdntList?ServiceKey=${this.key}&type=json&desc_kor=${term}&pageNo=1&numOfRows=30`;
    const URL = `https://cors.bridged.cc/http://apis.data.go.kr/1470000/FoodNtrIrdntInfoService/getFoodNtrItdntList?ServiceKey=${this.key}&type=json&desc_kor=${term}&pageNo=1&numOfRows=30`;
    const response = await axios.get(URL);
    return response;
  }
}

export default FoodSearch;
