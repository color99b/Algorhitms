# π΅ Heap

π λ°μ΄ν°μμ μ΅λκ°κ³Ό μ΅μκ°μ λΉ λ₯΄κ² μ°ΎκΈ° μν΄ κ³ μλ μμ  μ΄μ§νΈλ¦¬μ΄λ€.

- μ’,μ° μμμ μμΉκ° λμ κ΄κ³λ₯Ό λ°μνμ§ μκ³  μΈ΅μΌλ‘ λμ κ΄κ³λ₯Ό κ΅¬λΆνλ€.
- heapμμλ μ€λ³΅λ κ°μ νμ©νλ€. ( μ΄μ§ νμ νΈλ¦¬μμλ νμ©νμ§ μλλ€. )

<img src="1.png">

π heapμ μ μ©λλ κ·μΉ

- ν° κ°μ΄ μμ λ λ²¨μ μ‘΄μ¬νκ³ , μμ κ°μ νμ λ λ²¨μ μ‘΄μ¬νλ€.
- λΆλͺ¨ λΈλμ ν€ κ°μ΄ μμ λΈλμ ν€ κ°λ³΄λ€ ν­μ ν¬κ±°λ μμ μ΄μ§ νΈλ¦¬μ¬μΌνλ€.
  - Min-heap : λΆλͺ¨λΈλκ° μμλΈλλ³΄λ€ ν¬κ±°λ κ°λ€.,
  - Max-headp : λΆλͺ¨λΈλκ° μμλΈλλ³΄λ€ μμμΌνλ€.

π heapμ μ¬μ©νλ μ΄μ 

- μ΅μ, μ΅λκ°μ O(1) μκ°λ³΅μ‘λλ‘ μ»μ΄λΌ μ μκΈ° λλ¬Έμ΄λ€.
  - μ΅μκ°μ΄λ μ΅λκ°μ΄ ν­μ μ΅μμ, μ΅νμ λΈλμ λ΄κ²¨ μκΈ° λλ¬Έ
- μ΄μμ²΄μ μμ μ°μ μμ κΈ°λ°μ μΌλ€μ μ€μΌμ₯΄λ§ νκΈ° μν΄ heapμ μ¬μ©νκ³  μλ€.
- μ΅λ¨κ±°λ¦¬ κ΅¬νκΈ° μκ³ λ¦¬μ¦μμ μ΅μ λΉμ©μ κΈ°λ°μΌλ‘ κ·Έλνλ₯Ό νμν  λ μ¬μ©νλ€.

π heapκ΅¬ν μκ³ λ¦¬μ¦

- Min-heapμ μμλ‘ κ·μΉμ ν­μ λ§μ‘±νλ heapμ μ΄μ§νΈλ¦¬ μλ£κ΅¬μ‘°μμλ λ°°μ΄λ‘ κ΅¬νμ΄ κ°λ₯νλ€.

<p align="center"><img src="2.png"></p>

                            index : 0 1 2 3 4 5
                            value : 1 4 8 5 2 3

μμ²λΌ λμκ°λ€λ³΄λ©΄ heapμ index κ·μΉμ

> π£ μΌμͺ½ μμ nodeμ index : λΆλͺ¨λΈλ index *2 +1  
> π£ μ€λ₯Έμͺ½ μμ nodeμ index : λΆλͺ¨ λΈλ index *2 +2  
> π£ λΆλͺ¨ λΈλ μΈλ±μ€ = (μμ λΈλ index -1 ) / 2

-Max heapμ μμ
<img src="3.png">

---

## κ΅¬ν μ€λͺ

κΈ°λ³Έ ν

```typescript
class Heap {
  data: number[];
  constructor() {
    this.data = [];
  }

  getParentIndex(_i: number): number {
    return Math.floor((_i - 1) / 2);
  }
  getLeftChildIndex(_i: number): number {
    return _i * 2 + 1;
  }
  getRightChildIndex(_i: number): number {
    return Math.floor((_i - 1) / 2);
  }
}
```

- λ°μ΄ν°μ μ½μ : push + heapifyUp
  - push : λ°°μ΄μ λ°μ΄ν°λ₯Ό μ§μ΄λ£λλ€.
  - heapifyUp : λ°μ΄ν°λ₯Ό heapμλ£κ΅¬μ‘°μ λ§κ² indexλ₯Ό μ λ ¬νλ€.
    - μ λ ¬νκΈ° μν΄ νμν method -> swap
    1. μΆκ°λ data μ indexλ₯Ό μ μ₯νλ€.
    2. μΆκ°λ dataκ° μμκ³μΈ΅(λΆλͺ¨ indexμ data)λ³΄λ€ ν°λμ κ³μ λ°λ³΅νλ€  
       2-1. μΆκ°λ dataμ μμΉμ λΆλͺ¨μ μμΉλ₯Ό λ°κΏμ€λ€.  
       2-2. νμνλ indexλ₯Ό μΆκ°λ λ°μ΄ν°μ λΆλͺ¨μ indexλ‘ λ°κΏμ€λ€.
    3. 2λ²μ΄ μλ£λλ©΄ μΆκ°λ dataμ μΈ΅ μ‘°μ μ΄ λλλ€.

```typescript
  push(_data: number): void {
    // this.data.push(_data);
    this.data[this.data.length] = _data;
    //μλ‘μ΄ indexλΆμ¬ + λ°μ΄ν° ν λΉ
    this.heapifyUp();
    //μ«μκ° heapμ λ§κ² μ λ ¬λλλ‘νλ μ λ ¬ μκ³ λ¦¬μ¦μ΄ νμνλ€.
  }

  heapifyUp(): void {
    let currIdx = this.data.length - 1;

    while (this.data[currIdx] > this.data[this.getParentIndex(currIdx)]) {
      this.swap(currIdx, this.getParentIndex(currIdx));
      currIdx = this.getParentIndex(currIdx);
    }
  }

```

- λ°μ΄ν°μ μ­μ  : poll() + heapifyDown()

  - poll : μ΅λκ°μ λΉΌλΈλ€.
    1. μ΅μμ κ°μ maxValueμ μ μ₯νλ€.
    2. μ΅μμ κ°μ μ΅νμ κ°μΌλ‘ λ³κ²½νκ³ , lengthλ₯Ό -- ν΄μ€λ€.
    3. μμ κ°μ μλλ‘ λ°°μΉν΄μΌνλ―λ‘ heapifyDownμΌλ‘ λμ΄λ΄λ €μ€λ€.
  - heapifyDown : μ΅λκ°μ λΉΌλΈ heapμ κ΅¬μ‘°λ₯Ό λ€μ μ μμ μΌλ‘ λλ¦°λ€.

    1. μ΅μμκ°μ λ΄λ €μΌνλ―λ‘ curridxλ₯Ό 0μΌλ‘ μ€μ νλ€.
    2. leftChildκ° μμΌλ©΄ μ λ ¬μ΄ λλ κ²μ΄λ―λ‘ leftchildκ° μλλμ λ°λ³΅νλ€.  
       2-1. νμ¬ μ΅μμκ°μ μ΅νμκ°μΌλ‘ λ°λ μνμ΄λ―λ‘ leftchildμ dataκ° λ¬΄μ‘°κ±΄ ν¬λ€. λ°λΌμ biggestindexλ₯Ό leftchildλ‘ λ°κΎΈμ΄μ€λ€.  
       2-2. λ§μ½ leftChild μμ rightChildκ° μλ€λ©΄ κ·Έ κ°κ³Ό λΉκ΅νμ¬ biggestindexλ₯Ό μμ ν΄μ€λ€.

    3. biggestIndexμ dataκ° currindexμ dataλ³΄λ€ ν¬λ€λ©΄ swapν΄μ£Όκ³ , currindexλ₯Ό biggestIndexλ‘ μμ νμ¬ λ€μ νμν΄μ€λ€.
    4. 3λ²μ μ‘°κ±΄μ λΆν©νμ§ μμΌλ©΄ μ λ ¬μ΄ λμ΄λλ€.

  ```typescript

  poll(): number {
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();

    return maxValue;
  }

  heapifyDown(): void {
    let currIdx = 0;
    while (this.data[this.getLeftChildIndex(currIdx)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currIdx);

      if (
        this.data[this.getRightChildIndex(currIdx)] !== undefined &&
        this.data[this.getLeftChildIndex(currIdx)] <
          this.data[this.getRightChildIndex(currIdx)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currIdx);
      }

      if (this.data[biggestChildIndex] > this.data[currIdx]) {
        this.swap(currIdx, biggestChildIndex);
        currIdx = biggestChildIndex;
      } else {
        return;
      }
    }
  }
  ```

## π£ Test Code

```javascript
const heapTest = new Heap();
heapTest.push(6);
heapTest.push(8);
heapTest.push(7);
heapTest.push(4);
console.log(heapTest.data);
console.log(heapTest.poll());
console.log(heapTest.data);
```

<img src="result.png">
