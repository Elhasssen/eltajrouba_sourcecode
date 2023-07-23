from pypdf import PdfReader, PdfWriter
reader = PdfReader("allminutes.pdf")
writer = PdfWriter()
writer.append_pages_from_reader(reader)
writer.encrypt("123")

with open("output.pdf", "wb") as out_file:
    writer.write(out_file)