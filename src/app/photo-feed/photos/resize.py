from PIL import Image
import os


def resize_images(input_dir, output_dir, width=600, height=400):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Loop through all files in the input directory
    for filename in os.listdir(input_dir):
        # Adjust file extensions as needed
        if filename.endswith(".jpg") or filename.endswith(".png"):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, filename)

            # Open the image
            with Image.open(input_path) as img:
                # Resize the image
                resized_img = img.resize((width, height))

                # Save the resized image to the output directory
                resized_img.save(output_path)


if __name__ == "__main__":
    input_directory = "./"
    output_directory = "output_images"
    resize_images(input_directory, output_directory)
    print("Images resized successfully.")
