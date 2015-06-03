module.exports = {
  removeBadPeople: function(arr){
     return arr.filter(function(element){
          if (element.name && element.age){
              return element;
          }
      });
  },

  sumAgesValid: function(arr){
      arr = this.removeBadPeople(arr);
      return arr.reduce(function(prev, cur){
          return prev.age + cur.age;
      });
  },

  sumAgesAll: function(arr){
      ageArr = [];
      arr.filter(function(element){
          if (element.age > 0){
              ageArr.push(element.age);
          }
      });

      return ageArr.reduce(function(prev, cur){
          return prev + cur;
      });
  }
}
