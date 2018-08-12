       function spinalCase(str) {
            str = str.replace(/[^a-zA-Z]*([A-Z])/g, '-$1').toLowerCase();
            str = str[0] === '-' ? str.slice(1) : str;
            str = str.replace(/\s+([a-zA-Z])/g, '-$1');
            return str;
        } 
        spinalCase('This Is Spinal Tap');
