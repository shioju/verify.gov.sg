import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const getDimensionsToCenterImage = (doc: jsPDF, canvas: HTMLCanvasElement) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const widthRatio = pageWidth / canvas.width;
  const heightRatio = pageHeight / canvas.height;
  let ratio = Math.min(widthRatio, heightRatio);
  ratio = 0.98 * ratio;

  const canvasWidth = canvas.width * ratio;
  const canvasHeight = canvas.height * ratio;

  const marginX = (pageWidth - canvasWidth) / 2;
  const marginY = (pageHeight - canvasHeight) / 2;

  return { marginX, marginY, canvasWidth, canvasHeight };
};

export const savePdf = async (element: HTMLElement | HTMLDocument | null): Promise<void> => {
  if (element == null) return;

  // Old code for full image to occupy the whole page
  const canvas: HTMLCanvasElement = await html2canvas(element as HTMLElement);
  const imageData: string = canvas.toDataURL("image/svg+xml");

  const pdf: jsPDF = new jsPDF("p", "mm", "a4");

  // let width = pdf.internal.pageSize.getWidth();
  // let height = pdf.internal.pageSize.getHeight();
  // pdf.addImage(imageData, 'PNG', 0, 0, width, height);
  // pdf.save("download.pdf");

  const { marginX, marginY, canvasWidth, canvasHeight } = getDimensionsToCenterImage(pdf, canvas);

  pdf.addImage(imageData, "svg", marginX, marginY, canvasWidth, canvasHeight, "FAST");
  pdf.save("cert.pdf");
};