import json
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

class LegalFilter:
    def __init__(self, model_name="mtgv/MobileLLaMA-1.4B-Chat"):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForCausalLM.from_pretrained(
            model_name,
            torch_dtype=torch.float16,
            device_map="auto"
        )
        self.context = ""
        
    def load_json_data(self, filepath):
        """Load daily JSON update"""
        with open(filepath) as f:
            data = json.load(f)
        self.context = "\n".join(
            f"Legal Clause {i+1}: {item['text']}" 
            for i, item in enumerate(data)
        )
        
    def generate_response(self, query):
        """Process legal query with in-context learning"""
        prompt = f"""Legal Context:
{self.context}

Query: {query}
Response:"""
        
        inputs = self.tokenizer(prompt, return_tensors="pt").to(self.device)
        outputs = self.model.generate(
            **inputs,
            max_new_tokens=256,
            temperature=0.3,
            do_sample=True
        )
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)

# Usage Example
if __name__ == "__main__":
    filter = LegalFilter()
    filter.load_json_data("daily_data.json")
    
    while True:
        query = input("Enter legal query (or 'quit'): ")
        if query.lower() == 'quit':
            break
        print(filter.generate_response(query))