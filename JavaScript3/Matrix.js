class Matrix 
{
  constructor(m) 
  {
    this.m = m;
  }

  add(b) 
  {
    var result = [];
    for (var i = 0; i < this.m.length; i++)
    {
      var row = [];
      for (var j = 0; j < this.m[i].length; j++)
      {
        row.push(this.m[i][j] + b.m[i][j]);
      }
      result.push(row);
    }
    return new Matrix(result);
  }

  mul(b) 
  {
    var result = [];
    for (var i = 0; i < this.m.length; i++)
     {
      result[i] = [];
      for (var j = 0; j < b.m[0].length; j++) 
      {
        var sum = 0;
        for (var k = 0; k < this.m[0].length; k++) 
        {
          sum += this.m[i][k] * b.m[k][j];
        }
        result[i][j] = sum;
      }
    }
    return new Matrix(result);
  }
}

var a = new Matrix([[1, 1, 1], [2, 2, 2]]);
var b = new Matrix([[1, 2], [1, 2], [1, 2]]);
var c = a.mul(b);
console.log(c.m);