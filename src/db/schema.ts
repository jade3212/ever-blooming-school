import { pgTable, serial, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";

export const galleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  url: varchar("url", { length: 500 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const parents = pgTable("parents", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  parentId: integer("parent_id").references(() => parents.id).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  class: varchar("class", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  parentId: integer("parent_id").references(() => parents.id).notNull(),
  studentId: integer("student_id").references(() => students.id).notNull(),
  amount: integer("amount").notNull(),
  description: varchar("description", { length: 500 }).notNull(),
  status: varchar("status", { length: 50 }).notNull().default("completed"),
  receiptNumber: varchar("receipt_number", { length: 100 }).unique().notNull(),
  paymentMethod: varchar("payment_method", { length: 50 }).default("online"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const admissions = pgTable("admissions", {
  id: serial("id").primaryKey(),
  studentName: varchar("student_name", { length: 255 }).notNull(),
  parentName: varchar("parent_name", { length: 255 }).notNull(),
  parentPhone: varchar("parent_phone", { length: 20 }).notNull(),
  classToAdmit: varchar("class_to_admit", { length: 50 }).notNull(),
  aadharDocument: varchar("aadhar_document", { length: 500 }).default(""),
  birthCertificate: varchar("birth_certificate", { length: 500 }).default(""),
  transferCertificate: varchar("transfer_certificate", { length: 500 }).default(""),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  date: varchar("date", { length: 100 }).notNull(),
  icon: varchar("icon", { length: 50 }).notNull().default("trophy"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
