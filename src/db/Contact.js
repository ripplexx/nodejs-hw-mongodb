import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    phoneNumber: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String 
    },
    isFavourite: { 
      type: Boolean, 
      default: false 
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
  },
  { 
    timestamps: true, // createdAt ve updatedAt alanlarını otomatik ekler
    versionKey: false // __v alanını gizler (opsiyonel ama temiz görünür)
  }
);

// Model adının koleksiyon adıyla (contacts) eşleşmesi için 
// Mongoose otomatik olarak ismin çoğul ve küçük harfli halini kullanır.
export const Contact = mongoose.model('Contact', contactSchema);