function ageCalculator() { 
    const details = ( //person object
      name = "Sappho",
      type = "dog",
      age = 1.2
    );
    if (type === "human") {
      result = "Age of the " + type + " called " + name + " in dog years: " + age / 7   
    } else {
      result = "Age of the " + type + " called " + name + " in human years: " + age *7
    }
    console.log(result)
  };
  
  ageCalculator()
  